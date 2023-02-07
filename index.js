
function show() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/Staff",
        //xử lý khi thành công
        success: function (employees) {
            console.log(employees)
            let str = '';
            for (const employee of employees) {
                str += `
                 <tr>
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.age}</td>
                    <td>${employee.salary}</td>
                    <td>${employee.brand.name}</td>
                    <td><button type="button" class="btn btn-primary"  onclick="clearEdit()(${employee.id})" data-toggle="modal" data-target="#myModal">Edit</button></td>
                    <td><button type="button" class="btn btn-warning"  onclick="Delete(${employee.id})">Delete</button></td>
                 </tr>
                      `
            }

            document.getElementById("show").innerHTML = str;

        },
        error: function (err) {
            console.log(err)
        }
    })
}
show();


function Crate() {
    let employee = document.getElementById("Employeecode").value;
    let name = document.getElementById("Name").value;
    let age = document.getElementById("Age").value;
    let salary = document.getElementById("Salary").value;
    let brand = document.getElementById("Branch").value;
    let staff = {
        employee: employee,
        name: name,
        age: age,
        salary: salary,
        brand: brand,
    }
    $.ajax({

            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/Staff",
            data: JSON.stringify(staff),
            success: function (Staff) {
                show()
            },
            error: function (err) {
                console.log(err)
            }
        }
    )

}

function ShowEdit(id) {
    $.ajax({
            type: "GET",
            headers: {
                'Accept': 'application/json'
            },
            url: "http://localhost:8080/Staff/" + id,

            success: function (Staff) {

                document.getElementById("employeecodeedit").value = Staff.employee;
                document.getElementById("Name1").value = Staff.name;
                document.getElementById("Age1").value = Staff.age;
                document.getElementById("Salary1").value = Staff.salary;
                document.getElementById("Branch1").value = Staff.brand.name;

            },
            error: function (err) {
                console.log(err)
            }
        }
    )


}

function Delete(id) {
    $.ajax({

            type: "DELETE",
            url: "http://localhost:8080/Staff/" + id,
            success: function (Staff) {
                let text;
                if (confirm("Confirm want to delete ?") == true) {
                    text = "You pressed OK!";
                    show();
                }
            },
            error: function (err) {
                console.log(err)
            }
        }
    )


}
function clearEdit() {
    isCreate = true;
    document.getElementById("id").value = 0;
    $("#code").val("");
    $("#nameEmployee").val("");
    $("#salary").val("");
    $("#age").val("");
    $("#idBranch").val("");
}