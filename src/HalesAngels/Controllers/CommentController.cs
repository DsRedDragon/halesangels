using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using DM;
using Domain.Data;
using Domain.Model.Enums;
using Domain.Model.Models;
using Microsoft.AspNetCore.Mvc;
using TheHalesAngels;

namespace HalesAngels.Controllers
{
    [Route("api/[controller]")]
    public class CommentController : Controller
    {
        private DataAccess _dal;
        private Common _common;

        public CommentController(DataAccess dal, Common common)
        {
            _dal = dal;
            _common = common;
        }

        [HttpGet("[action]")]
        public IEnumerable<Comment> GetComments(int articleId)
        {
            IEnumerable<Comment> comments = _dal.GetCommentsByArticleId(articleId);
            return comments;
        }

        [HttpGet("[action]")]
        public IEnumerable<Comment> GetCommentsAdmin()
        {
            IEnumerable<Comment> comments = _dal.GetComments();
            return comments;
        }

        [HttpPost("[action]")]
        public Comment SaveComment([FromBody]CommentData result)
        {
            Comment comment = new Comment
            {
                ApplicationUserId = result.applicationUserId,
                ArticleId = result.articleId,
                CommentDt = DateTime.Now,
                IsNew = !result.isAdmin,
                CommentText = result.message,
                Approved = result.isAdmin, 
            };

            _dal.InsertComment(comment);

            StringBuilder sb = new StringBuilder();

            sb.Append("<b>There is new comment that has been submitted.</b> <br /> ");
            sb.Append("<table><tr><td><b>Comment From:</b></td><td>");
            sb.Append(comment.ApplicationUser.FirstName);
            sb.Append(" ");
            sb.Append(comment.ApplicationUser.LastName);
            sb.Append("</td></tr><tr><td><b>Comment Date:</b></td><td>");
            sb.Append(comment.CommentDt);
            sb.Append("</td></tr><tr><td><b>Article:</b></td><td>");
            sb.Append(comment.Article.Title);
            sb.Append("</td></tr><tr><td><b>Comment:</b></td><td>");
            sb.Append(comment.CommentText);
            sb.Append("</td></tr></table><br /><a href='http://www.thehalesangels.com'>Check it out</a>");

            _common.SendEmail("New Comment", sb.ToString(), EmailRecipientType.SysAdmin);


            return comment;

        }

        [HttpPost("[action]")]
        public Comment UpdateComment([FromBody]Comment comment)
        {
            _dal.UpdateComment(comment);

            if (comment.Approved)
            {
                StringBuilder sb = new StringBuilder();

                sb.Append("<b>There is new comment on an article.</b> <br /> ");
                sb.Append("<table><tr><td><b>Comment From:</b></td><td>");
                sb.Append(comment.ApplicationUser.FirstName);
                sb.Append(" ");
                sb.Append(comment.ApplicationUser.LastName);
                sb.Append("</td></tr><tr><td><b>Comment Date:</b></td><td>");
                sb.Append(comment.CommentDt);
                sb.Append("</td></tr><tr><td><b>Article:</b></td><td>");
                sb.Append(comment.Article.Title);
                sb.Append("</td></tr><tr><td><b>Comment:</b></td><td>");
                sb.Append(comment.CommentText);
                sb.Append("</td></tr></table><br /><a href='http://www.thehalesangels.com'>Check it out</a>");

                _common.SendEmail("New Comment", sb.ToString(), EmailRecipientType.General);
            }

            return comment;

        }

        [HttpGet("[action]")]
        public IEnumerable<SuggestionView> GetSuggestionViews(int userId)
        {
            IEnumerable<SuggestionView> suggestions = _dal.GetSuggestionViews(userId);

            return suggestions;
        }

        [HttpGet("[action]")]
        public IEnumerable<ListEnum> GetSuggestionTypes()
        {
            IEnumerable<ListEnum> comments = _dal.GetListEnumsByCategory(ListCategoryEnum.SuggestionType.ToInt());
            return comments;
        }

        [HttpPost("[action]")]
        public Suggestion InsertSuggestion([FromBody]Suggestion suggestion)
        {
            suggestion.CreatedDt = DateTime.Now;
            suggestion.StatusId = SuggestionStatus.Opened.ToInt();

            _dal.InsertSuggestion(suggestion);

            StringBuilder sb = new StringBuilder();

            sb.Append("<b>There is new feedback that has been submitted.</b> <br /> ");
            sb.Append("<table><tr><td><b>Feedback From:</b></td><td>");
            sb.Append(suggestion.Author.FirstName);
            sb.Append(" ");
            sb.Append(suggestion.Author.LastName);
            sb.Append("</td></tr><tr><td><b>Feedback Date:</b></td><td>");
            sb.Append(suggestion.CreatedDt);
            sb.Append("</td></tr><tr><td><b>Feedback:</b></td><td>");
            sb.Append(suggestion.Value);
            sb.Append("</td></tr></table><br /><a href='http://www.thehalesangels.com'>Check it out</a>");

            _common.SendEmail("New Feedback", sb.ToString(), EmailRecipientType.SysAdmin);

            return suggestion;

        }

        [HttpGet("[action]")]
        public void DeleteComment(int commentId)
        {
            _dal.DeleteComment(commentId);
        }

        [HttpPost("[action]")]
        public SuggestionView UpdateSuggestion([FromBody]SuggestionView view)
        {
            var suggestion = _dal.GetSuggestion(view.SuggestionId);

            suggestion.StatusId = view.StatusId;
            if (suggestion.StatusId == SuggestionStatus.Resolved.ToInt())
            {
                suggestion.ResolutionDt = DateTime.Now;
                view.ResolutionDT = DateTime.Now;
                view.StatusName = SuggestionStatus.Resolved.ToString();
            }
            else
            {
                view.StatusName = SuggestionStatus.InProgress.ToString();
            }

            _dal.UpdateSuggestion(suggestion);

            return view;
        }

        [HttpGet("[action]")]
        public void DeleteSuggestion(int suggestionId)
        {
            _dal.DeleteSuggestion(suggestionId);
        }
    }
}
