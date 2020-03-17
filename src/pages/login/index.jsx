import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo-home.png'
import email_icon from '../../assets/ic-email.svg'
import cadeado_icon from '../../assets/ic-cadeado.svg'

import './styles.css'

class login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  render() {
    const { hasError } = this.state
    return (
      <div className="login">
        <div className="main-content">
          <img className="logo_home" src={logo} alt="logo" />
          
          <p className="BEM-VINDO-AO-EMPRESA">BEM-VINDO AO EMPRESAS</p>

          <span className="subtitle" >Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</span>

          <div class="input-group flex-nowrap">
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-email">
                <img src={email_icon} alt="email icon" className="custom-icon" />
              </span>
            </div>
            <input type="text" class="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="addon-email" />
          </div>

          <div class="input-group flex-nowrap">
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-senha">
                <img src={cadeado_icon} alt="email icon" className="custom-icon" />
              </span>
            </div>
            <input type="text" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="addon-senha" />
          </div>

          <span style={{ visibility: hasError ? 'visible' : 'hidden' }} className="Credenciais-informad">
            Credenciais informadas são inválidas, tente novamente.
          </span>

          <button type="button" className="btn btn-info submit-btn">entrar</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
)(login);
