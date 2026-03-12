function calculateResult()
{
    let n = document.getElementById("subjects").value;
    let totalMarks = 0;

    for(let i=1; i<=n; i++)
    {
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        totalMarks += marks;
    }
    let average = totalMarks / n;
    let result ;
    let grade;

    if(average >= 90)
    {
        grade = "A";
    }
    else if(average >= 80)
    {
        grade = "B";
    }
    else if(average >= 70)
    {
        grade = "C";
    }
    else if(average >= 60)
    {
        grade = "D";
    }
    else
    {
        grade = "F";
    }
    if(average >= 60)
    {
        result = "Pass";
    }
    else
    {
        result = "Fail";
    }
    document.getElementById("result").innerHTML = 
    "Total Marks: " + totalMarks + "<br>" + "Average Marks: " + average + "<br>" +"Grade: " + grade + "<br>" +"Result: " + result;
}