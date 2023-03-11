import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  
  

  private listaDeUsuarios = [
    {usuario: "a@b.com", senha: "1234"}
  ]

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern("^[0-9]*$")]]
    });
    localStorage.setItem("usuarioLogado", "false");
  }

  onSubmit(){
    // console.log(this.myForm.value)
      try {
        this.listaDeUsuarios.forEach(element => {
          if (this.myForm.value.email == element.usuario){
            if (this.myForm.value.password == element.senha){
              localStorage.setItem("usuarioLogado", "true");
              localStorage.setItem("usuarioLogado", "true");
              window.alert("Login efetuado com sucesso!")
              this.router.navigate(['/home'])
            }
            else{window.alert("Senha inválida")}
          }
          else{window.alert("E-mail inválido")}
        });      
      } catch (error) {
        console.log(error)
      }
    // console.log("Usuário logado após a verificação",localStorage.getItem("usuarioLogado"))
  }

}
