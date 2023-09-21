using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Data;
using Domain.Model.Models;
using Microsoft.AspNetCore.Mvc;

namespace HalesAngels.Controllers
{
    [Route("api/[controller]")]
    public class ImageController : Controller
    {
        private DataAccess _dal;

        public ImageController(DataAccess dal)
        {
            _dal = dal;
        }

        [HttpGet("[action]")]
        public IEnumerable<Image> GetImagesByArticleId(int articleId)
        {
            List<Image> images = _dal.GetImagesByArticleId(articleId).ToList();
            if (images.Count > 0)
            {
                images[0].IsActive = true;
            }
            
            return images;
        }

        [HttpPost("[action]")]
        public Image SaveImage([FromBody]Image image)
        {
            _dal.InsertImage(image);
            return image;
        }

        [HttpPost("[action]")]
        public Image UpdateImage([FromBody]Image image)
        {
            _dal.UpdateImage(image);
            return image;
        }

        [HttpGet("[action]")]
        public void DeleteImage(int imageId)
        {
            _dal.DeleteImage(imageId);
        }
    }
}
