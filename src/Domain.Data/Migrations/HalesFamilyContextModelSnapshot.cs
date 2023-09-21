using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Domain.Data;

namespace Domain.Data.Migrations
{
    [DbContext(typeof(HalesFamilyContext))]
    partial class HalesFamilyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Domain.Model.Models.Archives", b =>
                {
                    b.Property<string>("ArchiveName");

                    b.Property<DateTime?>("MonthStart");

                    b.HasKey("ArchiveName");

                    b.ToTable("Archives","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.Article", b =>
                {
                    b.Property<int>("ArticleId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Archived")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.Property<string>("ArticleContent")
                        .HasColumnType("varchar(max)");

                    b.Property<int?>("AuthorId");

                    b.Property<bool>("IsNew")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("1");

                    b.Property<DateTime>("PostedDt")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("PostedDT")
                        .HasColumnType("datetime")
                        .HasDefaultValueSql("getdate()");

                    b.Property<string>("Title")
                        .HasColumnType("varchar(1000)");

                    b.Property<bool>("Visible")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.HasKey("ArticleId");

                    b.HasIndex("AuthorId");

                    b.ToTable("Article","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.ArticleDetail", b =>
                {
                    b.Property<int>("ArticleId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Archived");

                    b.Property<string>("ArticleContent");

                    b.Property<int>("AuthorId");

                    b.Property<string>("AuthorName");

                    b.Property<bool>("IsNew");

                    b.Property<DateTime>("PostedDT");

                    b.Property<string>("Title");

                    b.Property<bool>("Visible");

                    b.HasKey("ArticleId");

                    b.ToTable("ArticleDetails");
                });

            modelBuilder.Entity("Domain.Model.Models.ArticleTag", b =>
                {
                    b.Property<int>("ArticleTagId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ArticleId");

                    b.Property<int>("TagId");

                    b.HasKey("ArticleTagId");

                    b.HasIndex("ArticleId");

                    b.HasIndex("TagId");

                    b.ToTable("ArticleTag","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.Author", b =>
                {
                    b.Property<int>("AuthorId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuthorName")
                        .HasColumnType("varchar(100)");

                    b.Property<bool>("IsAdmin")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.Property<bool>("IsSystemAdmin")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.Property<DateTime?>("LastLoggedInDt")
                        .HasColumnName("LastLoggedInDT")
                        .HasColumnType("datetime");

                    b.Property<string>("Password")
                        .HasColumnType("varchar(100)");

                    b.Property<string>("SecretAnswer")
                        .HasColumnType("varchar(250)");

                    b.Property<string>("SecretQuestion")
                        .HasColumnType("varchar(250)");

                    b.HasKey("AuthorId");

                    b.ToTable("Author","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.AuthorDetails", b =>
                {
                    b.Property<int>("AuthorDetailsId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AuthorId");

                    b.Property<string>("EmailAddress")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<bool>("GeneralNotificationOptOut")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.HasKey("AuthorDetailsId");

                    b.HasIndex("AuthorId");

                    b.ToTable("AuthorDetails","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.Comment", b =>
                {
                    b.Property<int>("CommentId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Approved")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.Property<int>("ArticleId");

                    b.Property<int>("CommentByAuthorId");

                    b.Property<DateTime>("CommentDt")
                        .HasColumnName("CommentDT")
                        .HasColumnType("datetime");

                    b.Property<string>("CommentText")
                        .IsRequired()
                        .HasColumnType("varchar(max)");

                    b.Property<bool>("IsNew")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("1");

                    b.HasKey("CommentId");

                    b.HasIndex("ArticleId");

                    b.HasIndex("CommentByAuthorId");

                    b.ToTable("Comment","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.Country", b =>
                {
                    b.Property<int>("CountryId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CountryAbbr")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("CountryName")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("CountryId");

                    b.ToTable("Country","Application");
                });

            modelBuilder.Entity("Domain.Model.Models.File", b =>
                {
                    b.Property<int>("FileId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ArticleId");

                    b.Property<string>("FileName")
                        .IsRequired()
                        .HasColumnType("varchar(200)");

                    b.Property<string>("FileUrl")
                        .IsRequired()
                        .HasColumnType("varchar(max)");

                    b.HasKey("FileId");

                    b.HasIndex("ArticleId");

                    b.ToTable("File","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.Image", b =>
                {
                    b.Property<int>("ImageId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ArticleId");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("varchar(max)");

                    b.HasKey("ImageId");

                    b.HasIndex("ArticleId");

                    b.ToTable("Image","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.ListCategory", b =>
                {
                    b.Property<int>("ListCategoryId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .HasColumnType("varchar(500)");

                    b.Property<string>("EnumCode")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<string>("StringValue")
                        .HasColumnType("varchar(max)");

                    b.HasKey("ListCategoryId");

                    b.ToTable("ListCategory","Application");
                });

            modelBuilder.Entity("Domain.Model.Models.ListEnum", b =>
                {
                    b.Property<int>("ListEnumId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .HasColumnType("varchar(500)");

                    b.Property<string>("EnumCode")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<int>("ListCategoryId");

                    b.Property<string>("Value")
                        .HasColumnType("varchar(max)");

                    b.HasKey("ListEnumId");

                    b.HasIndex("ListCategoryId");

                    b.ToTable("ListEnum","Application");
                });

            modelBuilder.Entity("Domain.Model.Models.Setting", b =>
                {
                    b.Property<int>("SettingId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Encrypt")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.Property<string>("SettingName")
                        .IsRequired()
                        .HasColumnType("varchar(500)");

                    b.Property<string>("SettingValue")
                        .IsRequired()
                        .HasColumnType("varchar(max)");

                    b.Property<int>("TypeId")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("1");

                    b.HasKey("SettingId");

                    b.ToTable("Setting","Application");
                });

            modelBuilder.Entity("Domain.Model.Models.State", b =>
                {
                    b.Property<int>("StateId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CountryId");

                    b.Property<string>("StateAbbr")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("StateName")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("StateId");

                    b.HasIndex("CountryId");

                    b.ToTable("State","Application");
                });

            modelBuilder.Entity("Domain.Model.Models.Suggestion", b =>
                {
                    b.Property<int>("SuggestionId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AuthorId");

                    b.Property<string>("AuthorName")
                        .HasColumnType("varchar(100)");

                    b.Property<DateTime>("CreatedDt")
                        .HasColumnName("CreatedDT")
                        .HasColumnType("datetime");

                    b.Property<string>("EmailAddress")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<DateTime?>("ResolutionDt")
                        .HasColumnName("ResolutionDT")
                        .HasColumnType("datetime");

                    b.Property<int>("StatusId");

                    b.Property<int>("TypeId");

                    b.Property<string>("Value")
                        .IsRequired()
                        .HasColumnType("varchar(max)");

                    b.HasKey("SuggestionId");

                    b.HasIndex("AuthorId");

                    b.HasIndex("StatusId");

                    b.HasIndex("TypeId");

                    b.ToTable("Suggestion","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.SuggestionView", b =>
                {
                    b.Property<int>("SuggestionId");

                    b.Property<int?>("AuthorId");

                    b.Property<string>("AuthorName");

                    b.Property<DateTime>("CreatedDT");

                    b.Property<string>("EmailAddress");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<DateTime?>("ResolutionDT");

                    b.Property<int>("StatusId");

                    b.Property<string>("StatusName");

                    b.Property<int>("TypeId");

                    b.Property<string>("TypeName");

                    b.Property<string>("Value");

                    b.HasKey("SuggestionId", "AuthorId");

                    b.ToTable("SuggestionView");
                });

            modelBuilder.Entity("Domain.Model.Models.Tag", b =>
                {
                    b.Property<int>("TagId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("TagName")
                        .HasColumnType("varchar(100)");

                    b.HasKey("TagId");

                    b.ToTable("Tag","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.User", b =>
                {
                    b.Property<int>("AuthorId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuthorName");

                    b.Property<string>("FirstName");

                    b.Property<bool>("GeneralNotificationOptOut");

                    b.Property<bool>("IsAdmin");

                    b.Property<bool>("IsSystemAdmin");

                    b.Property<DateTime?>("LastLoggedInDT");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<string>("SecretAnswer");

                    b.Property<string>("SecretQuestion");

                    b.HasKey("AuthorId");

                    b.ToTable("User");
                });

            modelBuilder.Entity("Domain.Model.Models.Article", b =>
                {
                    b.HasOne("Domain.Model.Models.Author", "Author")
                        .WithMany("Article")
                        .HasForeignKey("AuthorId")
                        .HasConstraintName("FK_Article_Author");
                });

            modelBuilder.Entity("Domain.Model.Models.ArticleTag", b =>
                {
                    b.HasOne("Domain.Model.Models.Article", "Article")
                        .WithMany("ArticleTag")
                        .HasForeignKey("ArticleId")
                        .HasConstraintName("FK_ArticleTag_Article")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Domain.Model.Models.Tag", "Tag")
                        .WithMany("ArticleTag")
                        .HasForeignKey("TagId")
                        .HasConstraintName("FK_ArticleTag_Tag");
                });

            modelBuilder.Entity("Domain.Model.Models.AuthorDetails", b =>
                {
                    b.HasOne("Domain.Model.Models.Author", "Author")
                        .WithMany("AuthorDetails")
                        .HasForeignKey("AuthorId")
                        .HasConstraintName("FK_AuthorDetails_Author");
                });

            modelBuilder.Entity("Domain.Model.Models.Comment", b =>
                {
                    b.HasOne("Domain.Model.Models.Article", "Article")
                        .WithMany("Comment")
                        .HasForeignKey("ArticleId")
                        .HasConstraintName("FK_Comment_Article")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Domain.Model.Models.Author", "CommentByAuthor")
                        .WithMany("Comment")
                        .HasForeignKey("CommentByAuthorId")
                        .HasConstraintName("FK_Comment_Author");
                });

            modelBuilder.Entity("Domain.Model.Models.File", b =>
                {
                    b.HasOne("Domain.Model.Models.Article", "Article")
                        .WithMany("File")
                        .HasForeignKey("ArticleId")
                        .HasConstraintName("FK_File_Article")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Model.Models.Image", b =>
                {
                    b.HasOne("Domain.Model.Models.Article", "Article")
                        .WithMany("Image")
                        .HasForeignKey("ArticleId")
                        .HasConstraintName("FK_Image_Article")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Model.Models.ListEnum", b =>
                {
                    b.HasOne("Domain.Model.Models.ListCategory", "ListCategory")
                        .WithMany("ListEnum")
                        .HasForeignKey("ListCategoryId")
                        .HasConstraintName("FK_ListEnum_ListCategory");
                });

            modelBuilder.Entity("Domain.Model.Models.State", b =>
                {
                    b.HasOne("Domain.Model.Models.Country", "Country")
                        .WithMany("State")
                        .HasForeignKey("CountryId")
                        .HasConstraintName("FK_State_Country");
                });

            modelBuilder.Entity("Domain.Model.Models.Suggestion", b =>
                {
                    b.HasOne("Domain.Model.Models.Author", "Author")
                        .WithMany("Suggestion")
                        .HasForeignKey("AuthorId")
                        .HasConstraintName("FK_Suggestion_Author");

                    b.HasOne("Domain.Model.Models.ListEnum", "Status")
                        .WithMany("SuggestionStatus")
                        .HasForeignKey("StatusId")
                        .HasConstraintName("FK_Suggestion_SuggestionStatus");

                    b.HasOne("Domain.Model.Models.ListEnum", "Type")
                        .WithMany("SuggestionType")
                        .HasForeignKey("TypeId")
                        .HasConstraintName("FK_Suggestion_SuggestionType");
                });
        }
    }
}
