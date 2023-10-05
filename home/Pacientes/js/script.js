const patientForm = document.querySelector('.patient-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const diagnosisInput = document.getElementById('diagnosis');
const photoInput = document.getElementById('photo');
const patientList = document.getElementById('patient-list');
const searchInput = document.getElementById('search-input');

//trecho de código captura referências para os elementos HTML que serão utilizados no script, 
// como o formulário de pacientes, os campos de entrada de informações, a lista de pacientes e os botões de exclusão


patientForm.addEventListener('submit', function (e) {
    e.preventDefault();

    //esse bloco de código é executado quando o formulário de paciente é enviado

    //faz a Captura os valores dos campos de entrada
    const name = nameInput.value;
    const age = ageInput.value;
    const diagnosis = diagnosisInput.value;
    const photoFile = photoInput.files[0];

    
    if (name.trim() === '' || age.trim() === '' || diagnosis.trim() === '' || !photoFile) {
        alert('Por favor, preencha todos os campos e selecione uma foto.');
        return;
    }

    //cria um novo elemento de paciente na lista

    //cria um elemento de div para representar um paciente
    const listItem = document.createElement('div');
    listItem.classList.add('patient');

    //cria um elemento de imagem para exibir a foto do paciente
    const photo = document.createElement('img');
    photo.src = URL.createObjectURL(photoFile);
    photo.alt = 'Foto do Paciente';
    photo.classList.add('patient-photo');
    listItem.appendChild(photo);

    //cria um elemento de div para exibir os detalhes do paciente
    const details = document.createElement('div');
    details.classList.add('patient-details');
    details.innerHTML = `
        <span class="patient-name">${name}</span>
        <span class="patient-age">Idade: ${age} anos</span>
        <span class="patient-diagnosis">Diagnóstico: ${diagnosis}</span>
    `;
    listItem.appendChild(details);

    //adiciona o novo paciente à lista de pacientes
    patientList.appendChild(listItem);


    //limpar o campos de entrada
    nameInput.value = '';
    ageInput.value = '';
    diagnosisInput.value = '';
    photoInput.value = ''; 
});
