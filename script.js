const studentRows = document.querySelectorAll(".student-row");



studentRows.forEach((row) => {
    const ca1Input = row.querySelector(".ca1");
    const ca2Input = row.querySelector(".ca2");
    const ca3Input = row.querySelector(".ca3");
    const examInput = row.querySelector(".exam");
    const totalCell = row.querySelector(".total");
    const gradeCell = row.querySelector(".grade");
    const inputs = [ca1Input, ca2Input, ca3Input, examInput];
   
    
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            const ca1 = Number(ca1Input.value) || 0;
            const ca2 = Number(ca2Input.value) || 0;
            const ca3 = Number(ca3Input.value) ||  0;
            const exam = Number(examInput.value) || 0;

            const total = ca1 + ca2 + ca3 + exam;
            totalCell.textContent = total;

            let grade = "";
            if (total >= 70) {
                grade = "A"; 
            } else if (total >= 60) {
                grade = "B";
            } else if (total >= 50) {
                grade = "C";
            } else if (total >= 45) {
                grade = "D";
            } else if (total >= 40) {
                grade = "E";
            } else {
                grade = "F";
            }

            gradeCell.textContent = grade;
        });


    });






});