
function alertaEnvio() {
    let name = document.getElementsByTagName("input")[0]
    let lastName = document.getElementsByTagName("input")[1]
    let email = document.getElementsByTagName("input")[2]
    let tel = document.getElementsByTagName("input")[3]

    let select = document.getElementById("cursos")

    let curso = select.options[select.selectedIndex]

    console.log(curso.value)

    console.log(curso)
    if (name.value != "" && lastName.value != "" && email.value != 0 && tel.value != 0) {
        setTimeout(() => {
            alert("Congrats " + name.value + " Chosen Course " + curso.value)
            name.value = ""
            lastName.value = ""
            email.value = ""
            tel.value = ""
        }, 2000)
    } else {
        alert("Please, Fill in all fields")
    }


}