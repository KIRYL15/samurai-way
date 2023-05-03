import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }
    activeMode(){
        this.setState({
            editMode:true

        })
    }
    deActiveMode(){
        this.setState({
            editMode:false

        })
    }

    render() {
        const {status} = this.props
        return (
            <>{!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeMode.bind(this)}>{status}</span>
                </div>
            }
                {this.state.editMode &&
                    <div>
                        <input placeholder={"Напиши свой статус"} onBlur={this.deActiveMode.bind(this)} autoFocus={true} value={status} type="text"/>
                    </div>}
            </>
        );
    }
}

