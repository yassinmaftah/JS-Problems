/********************************************/
/*        Easy - Basic Data Retrieval       */
/********************************************/

/* getFirstEmployeeFirstName */
function    getFirstEmployeeFirstName(employees)
{
    console.log(employees[0].firstName);
}
/* getLastEmployeeLastName */
function    getFirstEmployeeFirstName(employees)
{
    console.log(employees[0].lastName);
}
/* getEmployeeDepartmentById */
function    getEmployeeDepartmentById(employees)
{
    console.log(employees[5].department);
}
/* countEmployees */
function    countEmployees(employees)
{
    console.log(employees.length);
}
/* hasInactiveEmployees */
function    countEmployees(employees)
{
    let i = 0;
    while(i < employees.length)
    {
        if (employees[i].isActive == false)
            return true;
        i++;
    }
    return false;
}
/* calculateAverageAge */
function    calculateAverageAge(employees)
{
    let i = 0;
    let TotalAge = 0;
    let AverageAge = 0;
    while(i < employees.length)
    {
        TotalAge += employees[i].age;
        i++;
    }
    AverageAge = TotalAge / employees.length;
    return AverageAge;
}
/* getHighestPaidEmployee */


function    maxEMPSalair(employees)
{
    let i = 0;
    let id_max = 0;
    while(i < employees.length)
    {
        if (employees[i].salary > max)
        {
            max = employees[i].salary;
            id_max = i;
        }
        i++;
    }
    return id_max;
}

function    getHighestPaidEmployee(employees)
{
    const id_max_salair =  maxEMPSalair(employees);
    console.log(employees[id_max_salair]);
}

/* countEmployeesInDepartment */
const department = "Développement";
function    countEmployeesInDepartment(employees , department)
{
    let i = 0;
    let count = 0;
    while (i < employees.length)
    {
        if (employees[i].department === department)
            count++;
        i++;
    }
    return count;
}

/* getUniqueDepartments */

function getUniqueDepartments(employees)
{

}


/*hasEmployeesWithoutProjects*/
function    hasEmployeesWithoutProjects(employees)
{
    let i = 0;
    while (i < employees.length)
    {
        if (employees[i].projects.length == 0)
            return true;
        i++;
    }
    return false;
}

/********************************************/
/*      Medium - Employee Data Analysis     */
/********************************************/


/* countEnglishSpeakingEmployees */

function    countEnglishSpeakingEmployees(employees)
{
    let count = 0;
    let i = 0;
    while (i < employees.length)
    {
        if (employees[i].languages.includes("English"))
            count++;
        i++;
    }
    return count;
}
/* getEmployeesByProject */

function    getEmployeesByProject(employees)
{
    let i = 0;
    while (i < employees.length)
    {
        if (employees[i].projects.includes("Project Gamma"))
            console.log(employees[i]);
        i++;
    }
}
/* getEmployeesWithMoreThanTwoSkills */

function    getEmployeesWithMoreThanTwoSkills(employees)
{
    let i = 0;
    while (i < employees.length)
    {
        if (employees[i].skills.length > 2)
            console.log(employees[i]);
        i++;
    }
}
/* getEmployeesByLastNameInitial */

const L = "L";
function    getEmployeesByLastNameInitial(employees, L)
{
    let i = 0;
    while (i < employees.length)
    {
        if (employees[i].firstName[0] == L)
            console.log(employees[i]);
        i++;
    }
}
/* getEmployeesByLastNameInitial */

function    calculateAverageSalaryByDepartment(employees)
{
    let i = 0;
    while (i < employees.length)
    {
        
    }
}