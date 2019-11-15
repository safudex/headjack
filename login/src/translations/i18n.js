import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                common: {
                    "downloadedPKFileTxt": "This file contains your private key, which you will need in case you ever lose or forget your NeoLogin password.\nThis file must be kept in a safe place and not shared with anyone else, as doing so will put your funds and wallet at risk of being stolen.\nPrivate Key: {{privkey}}",
                    "button_download": "Download",
                    "alert_session_expired": "Session expired, refresh the window to start again",
                },
                TOTPQR: {
                    "tittle": "Enable TOTP",
                    "label_totp": "TOTP code",
                    "helper_wrongMFA": "Wrong code",
                    "helper_MFAcode": "Input the the time-based code from your authenticator App",
                    "button_verify": "Verify",
                    "button_goBack": "Back to settings",
                },
                verifyEmail: {
                    "tittle": "Verify email address",
                    "label_verificationCode": "Verification code",
                    "helperWrongEmailCode": "Wrong code",
                    "helperCode": "Input the the code sent to your email",
                    "button_verify": "Verify",
                    "button_goBack": "Back to settings",
                },
                lostPassword: {
                    "wrongEmail": "Email is not registered",
                    "alert_weakPass": "Password is too weak",
                    "alert_wrongPk": "Wrong privkey",
                    "label_email": "Email",
                    "label_code": "Code",
                    "helper_code": "Input the code received through email.",
                    "label_privKey": "Private Key",
                    "helper_privKey": "You can find the code for this field in the file that was downloaded when you registered for NeoLogin. Please make sure that the code you are inputting is effecively the same that you downloaded, as it will become the private key associated with this account.",
                    "label_newPassword": "New Password",
                    "button_goBack": "Go back to sign in",
                    "link_resetPassword": "Reset password",
                    "info_resetOk": "Password recovery succeeded",
                    "button_resetPassword": "RESET PASSWORD"
                },
                settings: {
                    "tittle": "Manage account",
                    "section_susbcribe": "Subscribe/unsubscribe",
                    "label_newsletter": "Newsletter",
                    "section_privket": "Private key",
                    "section_security": "Security",
                    "button_verifyEmail": "Verify email",
                    "button_enableTOTP": "Enable TOTP",
                    "button_disableTOTP": "Disable TOTP",
                    "button_logout": "Logout",
                },
                signUp_form: {
                    "tittle_welcome": "Welcome!",
                    "tittle_signup": "Sign up",
                    "wrongEmail": "Your email address seems to be wrong",
                    "wrongPassword1": "Your password is too weak.\n{{suggestion}}",
                    "wrongPassword2": "Passwords do not match",
                    "label_email": "Email Address",
                    "label_password": "Password",
                    "label_confirmEmail": "Confirm Password",
                    "registerWrongEmail": "Email already exists",
                    "switch_sync": "Sync my encrypted key across devices",
                    "warning_sync": "Warning: If you disable this option you assume all responsability for your keys, as they will not be recoverable once deleted from the website's storage.",
                    "switch_import": "Import my private key",
                    "label_privkey": "Private key",
                    "checkbox_newsletter": "I want to receive inspiration, marketing promotions and updates via email.",
                    "checkbox_privacy_0_5": "I agree with ",
                    "checkbox_privacy_1_5": "NeoLogin's privacy policy",
                    "checkbox_privacy_2_5": " and ",
                    "checkbox_privacy_3_5": "license agreement",
                    "helper_privacy": "You must agree to the privacy policy and license agreement",
                    "button_singUp": "Sign Up",
                    "instructionsPrivKey": "Please try to download your private key, you can also display it and then copy-paste it somewhere safe. Clicking on the Continue button will take you back to the dApp.",
                    "button_displaykey": "Display Key",
                    "button_continue": "Continue",
                    "info_registration": "Upon registration, you will download a file which contains your private key. You will need it in case you ever lose or forget your NeoLogin password, so save it well!",
                    "link_signIn": "Already have an account? Sign in"
                },
                signIn_form: {
                    "tittle_signin": "Sign in",
                    "label_mfaSMS": "SMS Code",
                    "label_mfaTOTP": "TOTP Code",
                    "label_password": "Password",
                    "helper_wrongMFA": "Wrong code",
                    "helper_smsMFA": "Input the SMS code that we sent you",
                    "helper_totpMFA": "Input the the time-based code from your authenticator App",
                    "button_signin":"Sign In",
                    "wrongEmail": "No user with this email",
                    "wrongPassword": "Wrong password",
                    "checkbox_rememberme": "Remember me",
                    "link_forgotpw": "Forgot password?",
                    "link_signUp": "Don't have an account? Sign Up",
                },
                inverse: {
                    "link_language": "zh_Switch to ZH"
                }
            },
            zh: {
                common: {
                    "downloadedPKFileTxt": "zh_This file contains your private key, which you will need in case you ever lose or forget your NeoLogin password.\nThis file must be kept in a safe place and not shared with anyone else, as doing so will put your funds and wallet at risk of being stolen.\nPrivate Key: {{privkey}}",
                    "button_download": "zh_Download",
                    "alert_session_expired": "zh_Session expired, refresh the window to start again",
                },
                TOTPQR: {
                    "tittle": "zh_Enable TOTP",
                    "label_totp": "zh_TOTP code",
                    "helper_wrongMFA": "zh_Wrong code",
                    "helper_MFAcode": "zh_Input the the time-based code from your authenticator App",
                    "button_verify": "zh_Verify",
                    "button_goBack": "zh_Back to settings",
                },
                verifyEmail: {
                    "tittle": "zh_Verify email address",
                    "label_verificationCode": "zh_Verification code",
                    "helperWrongEmailCode": "zh_Wrong code",
                    "helperCode": "zh_Input the the code sent to your email",
                    "button_verify": "zh_Verify",
                    "button_goBack": "zh_Back to settings",
                },
                lostPassword: {
                    "wrongEmail": "zh_Email is not registered",
                    "alert_weakPass": "zh_Password is too weak",
                    "alert_wrongPk": "zh_Wrong privkey",
                    "label_email": "zh_Email",
                    "label_code": "zh_Code",
                    "helper_code": "zh_Input the code received through email.",
                    "label_privKey": "zh_Private Key",
                    "helper_privKey": "zh_You can find the code for this field in the file that was downloaded when you registered for NeoLogin. Please make sure that the code you are inputting is effecively the same that you downloaded, as it will become the private key associated with this account.",
                    "label_newPassword": "zh_New Password",
                    "button_goBack": "zh_Go back to sign in",
                    "link_resetPassword": "zh_Reset password",
                    "info_resetOk": "zh_Password recovery succeeded",
                    "button_resetPassword": "zh_RESET PASSWORD"
                },
                settings: {
                    "tittle": "zh_Manage account",
                    "section_susbcribe": "zh_Subscribe/unsubscribe",
                    "label_newsletter": "zh_Newsletter",
                    "section_privket": "zh_Private key",
                    "section_security": "zh_Security",
                    "button_verifyEmail": "zh_Verify email",
                    "button_enableTOTP": "zh_Enable TOTP",
                    "button_disableTOTP": "zh_Disable TOTP",
                    "button_logout": "zh_Logout",
                },
                signUp_form: {
                    "tittle_welcome": "zh_Welcome!",
                    "tittle_signup": "zh_Sign up",
                    "wrongEmail": "zh_Your email address seems to be wrong",
                    "wrongPassword1": "zh_Your password is too weak.\n{{suggestion}}",
                    "wrongPassword2": "zh_Passwords do not match",
                    "label_email": "zh_Email Address",
                    "label_password": "zh_Password",
                    "label_confirmEmail": "zh_Confirm Password",
                    "registerWrongEmail": "zh_Email already exists",
                    "switch_sync": "zh_Sync my encrypted key across devices",
                    "warning_sync": "zh_Warning: If you disable this option you assume all responsability for your keys, as they will not be recoverable once deleted from the website's storage.",
                    "switch_import": "zh_Import my private key",
                    "label_privkey": "zh_Private key",
                    "checkbox_newsletter": "zh_I want to receive inspiration, marketing promotions and updates via email.",
                    "checkbox_privacy_0_5": "zh_I agree with ",
                    "checkbox_privacy_1_5": "zh_NeoLogin's privacy policy",
                    "checkbox_privacy_2_5": "zh_ and ",
                    "checkbox_privacy_3_5": "zh_license agreement",
                    "helper_privacy": "zh_You must agree to the privacy policy and license agreement",
                    "button_singUp": "zh_Sign Up",
                    "instructionsPrivKey": "zh_Please try to download your private key, you can also display it and then copy-paste it somewhere safe. Clicking on the Continue button will take you back to the dApp.",
                    "button_displaykey": "zh_Display Key",
                    "button_continue": "zh_Continue",
                    "info_registration": "zh_Upon registration, you will download a file which contains your private key. You will need it in case you ever lose or forget your NeoLogin password, so save it well!",
                    "link_signIn": "zh_Already have an account? Sign in"
                },
                signIn_form: {
                    "tittle_signin": "zh_Sign in",
                    "label_password": "zh_Password",
                    "label_mfaSMS": "zh_SMS Code",
                    "label_mfaTOTP": "zh_TOTP Code",
                    "button_signin":"zh_Sign In",
                    "helper_wrongMFA": "zh_Wrong code",
                    "helper_smsMFA": "zh_Input the SMS code that we sent you",
                    "helper_totpMFA": "zh_Input the the time-based code from your authenticator App",
                    "wrongEmail": "zh_No user with this email",
                    "wrongPassword": "zh_Wrong password",
                    "checkbox_rememberme": "zh_Remember me",
                    "link_forgotpw": "zh_Forgot password?",
                    "link_signUp": "zh_Don't have an account? Sign Up",
                },
                inverse: {
                    "link_language": "Switch to EN"
                }
            }
        },
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["common", "inverse"],
        defaultNS: "common",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
