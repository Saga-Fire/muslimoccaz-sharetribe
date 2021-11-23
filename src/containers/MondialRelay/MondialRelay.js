import axios from 'axios';
import React from 'react';

import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

const MondialRelay = () => {
  const params = {
    Enseigne: 'BDTEST13',
    ModeCol: 'CCC',
    ModeLiv: '24R',
    NDossier: '1987', //F
    NClient: '1987', //F
    Expe_Langage: 'FR',
    Expe_Ad1: 'M. NAIDJI Mikhail',
    Expe_Ad2: '', //F
    Expe_Ad3: '140 rue de Lausanne',
    Expe_Ad4: '', //F
    Expe_Ville: 'Rouen',
    Expe_CP: '76000',
    Expe_Pays: 'FR',
    Expe_Tel1: '0626440432',
    Expe_Tel2: '', //F
    Expe_Mail: 'kanon_des_gemeaux@msn.com', //F
    Dest_Langage: 'FR',
    Dest_Ad1: 'M. DJERROUDI Nissim',
    Dest_Ad2: '', //F
    Dest_Ad3: '6 allée des mimosas',
    Dest_Ad4: '', //F
    Dest_Ville: 'Suresnes',
    Dest_CP: '92150',
    Dest_Pays: 'FR',
    Dest_Tel1: '0780904676',
    Dest_Tel2: '', //F
    Dest_Mail: 'n.djerrou@gmail.com', //F
    Poids: '1000',
    Longueur: '30', //F
    Taille: '', //F
    NbColis: '1',
    CRT_Valeur: '100',
    CRT_Devise: 'EUR', //F
    Exp_Valeur: '1000', //F
    Exp_Devise: 'EUR', //F
    COL_Rel_Pays: '', //F
    COL_Rel: '', //F
    LIV_Rel_Pays: 'FR',
    LIV_Rel: '013840',
    TAvisage: '', //F
    TReprise: '', //F
    Montage: '', //F
    TRDV: '', //F
    Assurance: '', //F
    Instructions: '', //F
    Security: 'PrivateK',
  };

  const onClick = () => {
    console.log(params);
    fetch(`https://api.mondialrelay.com/Web_Services.asmx/allow-cors`, {
      mode: 'cors',
    })
      // axios('https://api.mondialrelay.com/Web_Services.asmx?WSDL')
      .then(response => {
        console.log(response);
      });
  };
  return (
    <LayoutSingleColumn>
      <LayoutWrapperTopbar>
        <TopbarContainer />
      </LayoutWrapperTopbar>

      <LayoutWrapperMain>
        <button onClick={onClick}>Créer une expédition</button>
      </LayoutWrapperMain>

      <LayoutWrapperFooter>
        <Footer />
      </LayoutWrapperFooter>
    </LayoutSingleColumn>
  );
};

export default MondialRelay;
