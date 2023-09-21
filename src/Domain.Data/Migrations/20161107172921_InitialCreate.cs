using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Domain.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Operations");

            migrationBuilder.EnsureSchema(
                name: "Application");

            migrationBuilder.CreateTable(
                name: "Archives",
                schema: "Operations",
                columns: table => new
                {
                    ArchiveName = table.Column<string>(nullable: false),
                    MonthStart = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Archives", x => x.ArchiveName);
                });

            migrationBuilder.CreateTable(
                name: "ArticleDetails",
                columns: table => new
                {
                    ArticleId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Archived = table.Column<bool>(nullable: false),
                    ArticleContent = table.Column<string>(nullable: true),
                    AuthorId = table.Column<int>(nullable: false),
                    AuthorName = table.Column<string>(nullable: true),
                    IsNew = table.Column<bool>(nullable: false),
                    PostedDT = table.Column<DateTime>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Visible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArticleDetails", x => x.ArticleId);
                });

            migrationBuilder.CreateTable(
                name: "Author",
                schema: "Operations",
                columns: table => new
                {
                    AuthorId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AuthorName = table.Column<string>(type: "varchar(100)", nullable: true),
                    IsAdmin = table.Column<bool>(nullable: false, defaultValueSql: "0"),
                    IsSystemAdmin = table.Column<bool>(nullable: false, defaultValueSql: "0"),
                    LastLoggedInDT = table.Column<DateTime>(type: "datetime", nullable: true),
                    Password = table.Column<string>(type: "varchar(100)", nullable: true),
                    SecretAnswer = table.Column<string>(type: "varchar(250)", nullable: true),
                    SecretQuestion = table.Column<string>(type: "varchar(250)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Author", x => x.AuthorId);
                });

            migrationBuilder.CreateTable(
                name: "Country",
                schema: "Application",
                columns: table => new
                {
                    CountryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CountryAbbr = table.Column<string>(type: "varchar(20)", nullable: false),
                    CountryName = table.Column<string>(type: "varchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Country", x => x.CountryId);
                });

            migrationBuilder.CreateTable(
                name: "ListCategory",
                schema: "Application",
                columns: table => new
                {
                    ListCategoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(type: "varchar(500)", nullable: true),
                    EnumCode = table.Column<string>(type: "varchar(250)", nullable: false),
                    StringValue = table.Column<string>(type: "varchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ListCategory", x => x.ListCategoryId);
                });

            migrationBuilder.CreateTable(
                name: "Setting",
                schema: "Application",
                columns: table => new
                {
                    SettingId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Encrypt = table.Column<bool>(nullable: false, defaultValueSql: "0"),
                    SettingName = table.Column<string>(type: "varchar(500)", nullable: false),
                    SettingValue = table.Column<string>(type: "varchar(max)", nullable: false),
                    TypeId = table.Column<int>(nullable: false, defaultValueSql: "1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Setting", x => x.SettingId);
                });

            migrationBuilder.CreateTable(
                name: "SuggestionView",
                columns: table => new
                {
                    SuggestionId = table.Column<int>(nullable: false),
                    AuthorId = table.Column<int>(nullable: false),
                    AuthorName = table.Column<string>(nullable: true),
                    CreatedDT = table.Column<DateTime>(nullable: false),
                    EmailAddress = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    ResolutionDT = table.Column<DateTime>(nullable: true),
                    StatusId = table.Column<int>(nullable: false),
                    StatusName = table.Column<string>(nullable: true),
                    TypeId = table.Column<int>(nullable: false),
                    TypeName = table.Column<string>(nullable: true),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SuggestionView", x => new { x.SuggestionId, x.AuthorId });
                });

            migrationBuilder.CreateTable(
                name: "Tag",
                schema: "Operations",
                columns: table => new
                {
                    TagId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TagName = table.Column<string>(type: "varchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tag", x => x.TagId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    AuthorId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AuthorName = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    GeneralNotificationOptOut = table.Column<bool>(nullable: false),
                    IsAdmin = table.Column<bool>(nullable: false),
                    IsSystemAdmin = table.Column<bool>(nullable: false),
                    LastLoggedInDT = table.Column<DateTime>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    SecretAnswer = table.Column<string>(nullable: true),
                    SecretQuestion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.AuthorId);
                });

            migrationBuilder.CreateTable(
                name: "Article",
                schema: "Operations",
                columns: table => new
                {
                    ArticleId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Archived = table.Column<bool>(nullable: false, defaultValueSql: "0"),
                    ArticleContent = table.Column<string>(type: "varchar(max)", nullable: true),
                    AuthorId = table.Column<int>(nullable: true),
                    IsNew = table.Column<bool>(nullable: false, defaultValueSql: "1"),
                    PostedDT = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "getdate()"),
                    Title = table.Column<string>(type: "varchar(1000)", nullable: true),
                    Visible = table.Column<bool>(nullable: false, defaultValueSql: "0")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Article", x => x.ArticleId);
                    table.ForeignKey(
                        name: "FK_Article_Author",
                        column: x => x.AuthorId,
                        principalSchema: "Operations",
                        principalTable: "Author",
                        principalColumn: "AuthorId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AuthorDetails",
                schema: "Operations",
                columns: table => new
                {
                    AuthorDetailsId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AuthorId = table.Column<int>(nullable: false),
                    EmailAddress = table.Column<string>(type: "varchar(100)", nullable: false),
                    FirstName = table.Column<string>(type: "varchar(100)", nullable: false),
                    GeneralNotificationOptOut = table.Column<bool>(nullable: false, defaultValueSql: "0"),
                    LastName = table.Column<string>(type: "varchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuthorDetails", x => x.AuthorDetailsId);
                    table.ForeignKey(
                        name: "FK_AuthorDetails_Author",
                        column: x => x.AuthorId,
                        principalSchema: "Operations",
                        principalTable: "Author",
                        principalColumn: "AuthorId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "State",
                schema: "Application",
                columns: table => new
                {
                    StateId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CountryId = table.Column<int>(nullable: false),
                    StateAbbr = table.Column<string>(type: "varchar(20)", nullable: false),
                    StateName = table.Column<string>(type: "varchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_State", x => x.StateId);
                    table.ForeignKey(
                        name: "FK_State_Country",
                        column: x => x.CountryId,
                        principalSchema: "Application",
                        principalTable: "Country",
                        principalColumn: "CountryId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ListEnum",
                schema: "Application",
                columns: table => new
                {
                    ListEnumId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(type: "varchar(500)", nullable: true),
                    EnumCode = table.Column<string>(type: "varchar(250)", nullable: false),
                    ListCategoryId = table.Column<int>(nullable: false),
                    Value = table.Column<string>(type: "varchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ListEnum", x => x.ListEnumId);
                    table.ForeignKey(
                        name: "FK_ListEnum_ListCategory",
                        column: x => x.ListCategoryId,
                        principalSchema: "Application",
                        principalTable: "ListCategory",
                        principalColumn: "ListCategoryId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ArticleTag",
                schema: "Operations",
                columns: table => new
                {
                    ArticleTagId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ArticleId = table.Column<int>(nullable: false),
                    TagId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArticleTag", x => x.ArticleTagId);
                    table.ForeignKey(
                        name: "FK_ArticleTag_Article",
                        column: x => x.ArticleId,
                        principalSchema: "Operations",
                        principalTable: "Article",
                        principalColumn: "ArticleId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArticleTag_Tag",
                        column: x => x.TagId,
                        principalSchema: "Operations",
                        principalTable: "Tag",
                        principalColumn: "TagId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Comment",
                schema: "Operations",
                columns: table => new
                {
                    CommentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Approved = table.Column<bool>(nullable: false, defaultValueSql: "0"),
                    ArticleId = table.Column<int>(nullable: false),
                    CommentByAuthorId = table.Column<int>(nullable: false),
                    CommentDT = table.Column<DateTime>(type: "datetime", nullable: false),
                    CommentText = table.Column<string>(type: "varchar(max)", nullable: false),
                    IsNew = table.Column<bool>(nullable: false, defaultValueSql: "1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comment", x => x.CommentId);
                    table.ForeignKey(
                        name: "FK_Comment_Article",
                        column: x => x.ArticleId,
                        principalSchema: "Operations",
                        principalTable: "Article",
                        principalColumn: "ArticleId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Comment_Author",
                        column: x => x.CommentByAuthorId,
                        principalSchema: "Operations",
                        principalTable: "Author",
                        principalColumn: "AuthorId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "File",
                schema: "Operations",
                columns: table => new
                {
                    FileId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ArticleId = table.Column<int>(nullable: false),
                    FileName = table.Column<string>(type: "varchar(200)", nullable: false),
                    FileUrl = table.Column<string>(type: "varchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_File", x => x.FileId);
                    table.ForeignKey(
                        name: "FK_File_Article",
                        column: x => x.ArticleId,
                        principalSchema: "Operations",
                        principalTable: "Article",
                        principalColumn: "ArticleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Image",
                schema: "Operations",
                columns: table => new
                {
                    ImageId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ArticleId = table.Column<int>(nullable: false),
                    ImageUrl = table.Column<string>(type: "varchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Image", x => x.ImageId);
                    table.ForeignKey(
                        name: "FK_Image_Article",
                        column: x => x.ArticleId,
                        principalSchema: "Operations",
                        principalTable: "Article",
                        principalColumn: "ArticleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Suggestion",
                schema: "Operations",
                columns: table => new
                {
                    SuggestionId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AuthorId = table.Column<int>(nullable: true),
                    AuthorName = table.Column<string>(type: "varchar(100)", nullable: true),
                    CreatedDT = table.Column<DateTime>(type: "datetime", nullable: false),
                    EmailAddress = table.Column<string>(type: "varchar(100)", nullable: false),
                    FirstName = table.Column<string>(type: "varchar(100)", nullable: false),
                    LastName = table.Column<string>(type: "varchar(100)", nullable: false),
                    ResolutionDT = table.Column<DateTime>(type: "datetime", nullable: true),
                    StatusId = table.Column<int>(nullable: false),
                    TypeId = table.Column<int>(nullable: false),
                    Value = table.Column<string>(type: "varchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suggestion", x => x.SuggestionId);
                    table.ForeignKey(
                        name: "FK_Suggestion_Author",
                        column: x => x.AuthorId,
                        principalSchema: "Operations",
                        principalTable: "Author",
                        principalColumn: "AuthorId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Suggestion_SuggestionStatus",
                        column: x => x.StatusId,
                        principalSchema: "Application",
                        principalTable: "ListEnum",
                        principalColumn: "ListEnumId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Suggestion_SuggestionType",
                        column: x => x.TypeId,
                        principalSchema: "Application",
                        principalTable: "ListEnum",
                        principalColumn: "ListEnumId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Article_AuthorId",
                schema: "Operations",
                table: "Article",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_ArticleTag_ArticleId",
                schema: "Operations",
                table: "ArticleTag",
                column: "ArticleId");

            migrationBuilder.CreateIndex(
                name: "IX_ArticleTag_TagId",
                schema: "Operations",
                table: "ArticleTag",
                column: "TagId");

            migrationBuilder.CreateIndex(
                name: "IX_AuthorDetails_AuthorId",
                schema: "Operations",
                table: "AuthorDetails",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_ArticleId",
                schema: "Operations",
                table: "Comment",
                column: "ArticleId");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_CommentByAuthorId",
                schema: "Operations",
                table: "Comment",
                column: "CommentByAuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_File_ArticleId",
                schema: "Operations",
                table: "File",
                column: "ArticleId");

            migrationBuilder.CreateIndex(
                name: "IX_Image_ArticleId",
                schema: "Operations",
                table: "Image",
                column: "ArticleId");

            migrationBuilder.CreateIndex(
                name: "IX_ListEnum_ListCategoryId",
                schema: "Application",
                table: "ListEnum",
                column: "ListCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_State_CountryId",
                schema: "Application",
                table: "State",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Suggestion_AuthorId",
                schema: "Operations",
                table: "Suggestion",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Suggestion_StatusId",
                schema: "Operations",
                table: "Suggestion",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Suggestion_TypeId",
                schema: "Operations",
                table: "Suggestion",
                column: "TypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Archives",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "ArticleDetails");

            migrationBuilder.DropTable(
                name: "ArticleTag",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "AuthorDetails",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "Comment",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "File",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "Image",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "Setting",
                schema: "Application");

            migrationBuilder.DropTable(
                name: "State",
                schema: "Application");

            migrationBuilder.DropTable(
                name: "Suggestion",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "SuggestionView");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Tag",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "Article",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "Country",
                schema: "Application");

            migrationBuilder.DropTable(
                name: "ListEnum",
                schema: "Application");

            migrationBuilder.DropTable(
                name: "Author",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "ListCategory",
                schema: "Application");
        }
    }
}
