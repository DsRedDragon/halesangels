using System.Collections.Generic;
using Domain.Data;
using Domain.Model.Enums;
using Domain.Model.Models;
using MailKit.Net.Smtp;
using MimeKit;

namespace TheHalesAngels
{
    public class Common
    {
        private DataAccess _dal;

        public Common(DataAccess dal)
        {
            _dal = dal;
        }

        public async void SendEmail(string subject, string body, EmailRecipientType type)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("The Hales Angels Admin", "admin@thehalesangels.com"));
            message.Subject = subject;
            var bodyBuilder = new BodyBuilder();
            bodyBuilder.HtmlBody = string.Format("<h1>The Hales Angels</h1><hr /> {0}<hr /><h6>You can unsubscribe from these notifications from your profile at <a href='http://www.thehalesangels.com'>The Hales Angels</a></h6>", body);
            message.Body = bodyBuilder.ToMessageBody();

            IEnumerable<ApplicationUser> users = new List<ApplicationUser>();

            users = _dal.GetApplicationUsersForNotifications(type);
            foreach (var user in users)
            {
                message.Bcc.Add(new MailboxAddress(string.Format("{0} {1}", user.FirstName, user.LastName), user.EmailAddress));
            }

            using (var client = new SmtpClient())
            {
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;
                await client.ConnectAsync("smtp.office365.com", 587, false).ConfigureAwait(false);

                // Note: since we don't have an OAuth2 token, disable
                // the XOAUTH2 authentication mechanism.
                client.AuthenticationMechanisms.Remove("XOAUTH2");

                // Note: only needed if the SMTP server requires authentication
                await client.AuthenticateAsync("dhales@myeggettfamily.com", "Slayers1").ConfigureAwait(false);

                await client.SendAsync(message).ConfigureAwait(false);
                await client.DisconnectAsync(true).ConfigureAwait(false);
            }

        }
    }
}