import Student from "../models/Student";

export const classController = (req, res) => {
  res.render("admin/class");
};

export const studentController = (req, res) => {
  res.render("admin/student");
};

export const createStudentController = async (req, res) => {
  const {
    body: { stu_name, stu_grade, stu_class, },
  } = req;
  try {
    const result = await Student.create({
      name: stu_name,
      grade: parseInt(stu_grade),
      ban: parseInt(stu_class),
    });

    res.render("admin/student", { msg: "데이터가 추가되었습니다." });
  } catch (e) {
    console.log(e);
    studentController(req, res);
  }
};