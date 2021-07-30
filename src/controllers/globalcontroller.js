
import Student from "../models/Student";

export const mainController = (req, res) => {
  res.render("global/main");
};

export const resultController = async (req, res) => {
  const { g, c } = req.query;

  if (g === "--선택--" || c === "--선택--") {
    res.render("global/main", { errorMsg: "학교, 학년, 반을 선택하세요" });
  } else {
    try {
      const studentList = await Student.find(
        {
          grade: parseInt(g),
          ban: parseInt(c),
        },
        {}
      );
      res.render("global/result", { list: studentList });
    } catch (e) {
      console.log(e);
      mainController(req, res);
    }
  }
};

// get => query
// post => body