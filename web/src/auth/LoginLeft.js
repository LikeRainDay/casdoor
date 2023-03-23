// Copyright 2021 The Casdoor Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";

class LoginLeft extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      classes: props,
      type: props.type,
      applicationName: props.applicationName !== undefined ? props.applicationName : (props.match === undefined ? null : props.match.params.applicationName),
      owner: props.owner !== undefined ? props.owner : (props.match === undefined ? null : props.match.params.owner),
      application: null,
      mode: props.mode !== undefined ? props.mode : (props.match === undefined ? null : props.match.params.mode), // "signup" or "signin"
      msg: null,
      username: null,
      validEmailOrPhone: false,
      validEmail: false,
      loginMethod: "password",
      enableCaptchaModal: false,
      openCaptchaModal: false,
      verifyCaptcha: undefined,
      samlResponse: "",
      relayState: "",
      redirectUrl: "",
      isTermsOfUseVisible: false,
      termsOfUseContent: "",
    };
  }

  getApplicationObj() {
    return this.props.application ?? this.state.application;
  }

  render() {
    const application = this.getApplicationObj();
    if (application === null) {
      return (<></>);
    }

    if (application.formSideHtml === null) {
      return (<></>);
    }

    return (
      <div className="side-image" style={{display: application.formOffset !== 4 ? "none" : null}}>
        <div dangerouslySetInnerHTML={{__html: application.formSideHtml}} />
      </div>
    );
  }
}

export default LoginLeft;
