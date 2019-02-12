using Cel.Esd.Domain.Entities.User;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cel.Esd.SqlServer.EntityFramework.Mapping
{
    internal class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Ignore(entity => entity.IsValid);
            builder.HasKey(entity => entity.Id);
            builder.Property(entity => entity.Id)
                   .HasColumnName("Id")
                   .IsRequired();

            builder.Property(entity => entity.CreateDate)
                   .HasColumnName("CreateDate")
                   .IsRequired();

            builder.Property(entity => entity.UpdateDate)
                   .HasColumnName("UpdateDate");

            builder.Property(entity => entity.Name)
                   .HasColumnName("Name")
                   .HasMaxLength(100)
                   .IsRequired();

            builder.Property(entity => entity.Email)
                   .HasColumnName("Email")
                   .HasMaxLength(100)
                   .IsRequired();

            builder.Property(entity => entity.Description)
                   .HasMaxLength(300)
                   .HasColumnName("Description");

            builder.Property(entity => entity.Active)
                   .HasColumnName("Active")
                   .IsRequired()
                   .HasDefaultValue(1);

            builder.ToTable("User");
        }
    }
}
