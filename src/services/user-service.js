const prisma = require("../models/prisma");

// =============== Register =============== //

exports.findUserByemailOrMobile = (emailOrMobile) =>
  prisma.user.findFirst({
    where: {
      OR: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
    },
  });

exports.createUser = (data) => prisma.user.create({data:{...data,status:true}});

exports.findUserById = (id) =>
  prisma.user.findUnique({
    where: { id },
  });

exports.updateUserById = (data, id) =>
  prisma.user.update({ data, where: { id } });
