import React from "react";

function App() {
  
  const students = [
    { name: "太郎", scores: [85, 90, 78] }, 
    { name: "花子", scores: [88, 76, 92] },
    { name: "次郎", scores: [80, 85, 87] },
    { name: "一郎", scores: [75, 88, 80] },
  ];

  const subjects = ["国語", "数学", "英語"]; 

  return (
    <div style={{ padding: "20px" }}>
      <h1>クラスの成績一覧</h1>
      <table border="1" cellPadding="5" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>名前</th>
            {subjects.map((subject, index) => (
              <th key={index}>{subject}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              {student.scores.map((score, scoreIndex) => (
                <td key={scoreIndex}>{score}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
