import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo-home.png'
import email_icon from '../../assets/ic-email.svg'
import cadeado_icon from '../../assets/ic-cadeado.svg'
import warnink from '../../assets/warning.svg'

import './styles.css'

class login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      /** hasError: Booleano que manipula os alertas de erro do componente. */
      hasError: false,
      /** Form: Objeto com email e senha do usuário. */
      form: {
        email: '',
        password: ''
      }
    }
  }

  componentDidMount() {
  }
  
  componentDidUpdate() {
    console.log(this.props)
  }

  handleEmail = (event) => {
    const { value } = event.target
    const { password } = this.state.form
    
    this.setState( { form: { password, email: value } } )
  }
  
  handlepassword = (event) => {
    const { value } = event.target
    const { email } = this.state.form
    
    this.setState( { form: { email, password: value } } )
  }

  handleLogin = () => {
    const { form } = this.state

    this.props.dispatch( { type: 'LOGIN', form } )
  }

  render() {
    const { form } = this.state
    const { hasError } = this.props
    return (
      // Tela Principal
      <div className="login">

        {/* Componente principal */}
        <div className="main-content">

          {/* Imagem superior do Login */}
          <img className="logo_home" src={logo} alt="logo" />
          
          {/* Mensagem de Bem Vindo */}
          <p className="BEM-VINDO-AO-EMPRESA">BEM-VINDO AO EMPRESAS</p>

          {/* Subtitulo ficticio */}
          <span className="subtitle" >Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</span>

          {/* Input de Email com Bootstrap */}
          <div className="input-group flex-nowrap">
            <div className="input-group-prepend">
              <span className={`input-group-text ${hasError ? 'hasError' : ''}`} id="addon-email" >
                <img src={email_icon} alt="email icon" className="custom-icon" />
              </span>
            </div>
            <input
              type="text"
              className={`form-control ${hasError ? 'hasError' : ''}`}
              placeholder="E-mail"
              aria-label="E-mail"
              aria-describedby="addon-email"
              value={form.email}
              onChange={this.handleEmail}
            />
            <div className="input-group-prepend">
              <span className={`input-group-text ${hasError ? 'hasError' : ''}`} id="addon-email" >
                <img src={warnink} alt="exclamation icon" className="custom-icon" style={{ visibility: hasError ? 'visible' : 'hidden' }} />
              </span>
            </div>
          </div>

          {/* Input de Senha com Bootstrap */}
          <div className="input-group flex-nowrap">
            <div className="input-group-prepend">
              <span className={`input-group-text ${hasError ? 'hasError' : ''}`} id="addon-senha">
                <img src={cadeado_icon} alt="email icon" className="custom-icon" />
              </span>
            </div>
            <input
              type="password"
              className={`form-control ${hasError ? 'hasError' : ''}`}
              placeholder="Senha"
              aria-label="Senha"
              aria-describedby="addon-senha"
              value={form.password}
              onChange={this.handlepassword}
            />
            <div className="input-group-prepend">
              <span className={`input-group-text ${hasError ? 'hasError' : ''}`} id="addon-email">
                <img src={warnink} alt="exclamation icon" className="custom-icon" style={{ visibility: hasError ? 'visible' : 'hidden' }}  />
              </span>
            </div>
          </div>

          {/* Mensagem de Erro */}
          <span style={{ visibility: hasError ? 'visible' : 'hidden' }} className="Credenciais-informad">
            Credenciais informadas são inválidas, tente novamente.
          </span>

          {/* Botão de Submit com Bootstrap */}
          <button type="button" onClick={this.handleLogin} className="btn btn-info submit-btn">entrar</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (state)

export default connect(mapStateToProps)(login);
