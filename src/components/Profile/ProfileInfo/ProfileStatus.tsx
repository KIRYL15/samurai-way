import React from 'react';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void

}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activeMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActiveMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e:any) => {
        this.setState
        ({
            status:e.currentTarget.value
        })
    }
    render() {

        return (
            <>{!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeMode}>{this.props.status || "------"}</span>
                </div>
            }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            //placeholder={"Напиши свой статус"}
                            onBlur={this.deActiveMode}
                            autoFocus={true}
                            value={this.state.status}
                        />
                    </div>}
            </>
        );
    }
}

