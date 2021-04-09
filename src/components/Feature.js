import React from 'react';
import './Feature.css';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

function Feature() {
    return (
        <div className="features">
            <h1>What security features do we provide?</h1>
            <div className="features__body">
                <div className="features__item"><h2>Data Protection through Randomised Encryption</h2><EnhancedEncryptionIcon/></div>
                <div className="features__item"><h2>Detection of Malicious Content</h2><FindInPageIcon/></div>
                <div className="features__item"><h2>Risk-based Authentication</h2><VpnKeyIcon/></div>
                <div className="features__item"><h2>Adaptive Access Code</h2><VideogameAssetIcon/></div>

            </div>
        </div>
    )
}

export default Feature
