import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <fieldset className="signup-form">
                <div className="signup-form-left">
                    <input type="text"
                        value={this.props.name} onChange={e => this.props.setState({name: e.target.value})}
                        name="name" id="signup-name" className="signup-name" placeholder="Nome"/>
                    <input type="text"
                        value={this.props.email} onChange={e => this.props.setState({email: e.target.value})}
                        name="email" id="signup-email" className="signup-email" placeholder="Email"/>
                    <input type="password"
                        value={this.props.password} onChange={e => this.props.setState({password: e.target.value})}
                        name="password" id="signup-password" className="signup-password" placeholder="Senha"/>
                    <button onClick={this.props.signup} className="btn btn-signup">Junte-se a nós</button>
                </div>
                <div className="signup-form-right">
                    <h2 className="title-red font-bebas">Shh, sem spoiler...</h2>
                    <p>Escolha um, ou uma.</p>
                    <div className="profile-selector">
                        <input type="radio" name="profile-pic" id="captain-marvel" value="captain marvel"
                            onChange={e => this.setState({profile: e.target.value})}/>
                        <label className="profile-pic profile-captain-marvel" htmlFor="captain-marvel"></label>
                        <input type="radio" name="profile-pic" id="black-panther" value="black panther"
                            onChange={e => this.setState({profile: e.target.value})}/>
                        <label className="profile-pic profile-black-panther" htmlFor="black-panther"></label>
                        <input type="radio" name="profile-pic" id="dark-phoenix" value="dark phoenix"
                            onChange={e => this.setState({profile: e.target.value})}/>
                        <label className="profile-pic profile-dark-phoenix" htmlFor="dark-phoenix"></label>
                        <input type="radio" name="profile-pic" id="iron-man" value="iron man"
                            onChange={e => this.setState({profile: e.target.value})}/>
                        <label className="profile-pic profile-iron-man" htmlFor="iron-man"></label>
                    </div>
                </div>
            </fieldset>
        )
    }
}

export default Form