using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using DM;
using Domain.Data;
using Domain.Model.Enums;
using Domain.Model.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace HalesAngels.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private DataAccess _dal;

        public UserController(DataAccess dal)
        {
            _dal = dal;
        }

        [HttpGet("[action]")]
        public ApplicationUser GetUserByExternalId(string externalId)
        {
            ApplicationUser user = _dal.GetApplicationUserByExternalId(externalId);
            return user;
        }

        [HttpGet("[action]")]
        public AppUserView GetUserViewByExternalId(string externalId)
        {
            AppUserView user = _dal.GetAppUserViewByExternalId(externalId);
            if (user.IsNull())
            {
                user = new AppUserView();
                user.LastLoggedInDt = DateTime.Now;
                user.ReceiveNotifications = true;
            }

            return user;
        }

        [HttpGet("[action]")]
        public IEnumerable<ApplicationUser> GetApplicationUsers()
        {
            return _dal.GetApplicationUsers();
        }

        [HttpGet("[action]")]
        public IEnumerable<ApplicationUser> GetApplicationUsersForNotifications()
        {
            return _dal.GetApplicationUsersForNotifications();
        }

        [HttpPost("[action]")]
        public AppUserView UpdateUser([FromBody]AppUserView view, bool fromLogin = false)
        {
            if (view.ApplicationUserId > 0)
            {
                var appUser = _dal.GetApplicationUser(view.ApplicationUserId);

                if (view.EmailAddress.IsNull())
                {
                    view.EmailAddress = appUser.EmailAddress.IsNotNull() ? appUser.EmailAddress : string.Empty;
                }

                appUser.ApplicationUserId = view.ApplicationUserId;
                appUser.EmailAddress = view.EmailAddress;
                appUser.IsSystemAdmin = view.IsSystemAdmin;
                appUser.ReceiveNotifications = view.ReceiveNotifications;
                appUser.ExternalId = view.ExternalId;
                appUser.ExternalTypeId = view.ExternalTypeId;
                appUser.FirstName = view.FirstName;
                appUser.IsAdmin = view.IsAdmin;
                appUser.LastLoggedInDt = view.LastLoggedInDt;
                appUser.LastName = view.LastName;

                if (fromLogin)
                {
                    appUser.LastLoggedInDt = DateTime.Now;
                }

                _dal.UpdateApplicationUser(appUser);
            }
            else
            {
                ApplicationUser user = new ApplicationUser
                {
                    ApplicationUserId = view.ApplicationUserId,
                    EmailAddress = view.EmailAddress.IsNotNull() ? view.EmailAddress : string.Empty,
                    IsSystemAdmin = view.IsSystemAdmin,
                    ReceiveNotifications = view.ReceiveNotifications,
                    ExternalId = view.ExternalId,
                    ExternalTypeId = ExternalLoginType.Facebook.ToInt(),
                    LastLoggedInDt = DateTime.Now,
                    FirstName = view.FirstName,
                    IsAdmin = view.IsAdmin,
                    LastName = view.LastName
                };

                _dal.InsertApplicationUser(user);
            }

            return view;
        }
    }
}
