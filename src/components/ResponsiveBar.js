// import * as React from 'react';
// import { useEffect } from 'react';
// import { AppBarComponent } from '@syncfusion/ej2-react-navigations';
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import './default.css';

// const Default = () => {

//     return (
//         <div className='control-pane'>
//             <div className='col-lg-12 control-section default-appbar-section'>
//                 <div className='control appbar-sample'>
//                     <div className="default-appbar-container">
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <h5>Simple AppBar</h5>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <AppBarComponent colorMode="Primary">
//                                     <ButtonComponent ref={regularBtn => (regularBtn = regularBtn)} aria-label='menu' cssClass='e-inherit menu' iconCss='e-icons e-menu'></ButtonComponent>
//                                     <span className="regular">React AppBar</span>
//                                     <div className="e-appbar-spacer"></div>
//                                     <ButtonComponent cssClass='e-inherit login'>FREE TRIAL</ButtonComponent>
//                                 </AppBarComponent>
//                             </div>
//                         </div>
//                         <br />
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <h5>Prominent</h5>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <AppBarComponent mode="Prominent" cssClass='prominent-appbar' colorMode="Primary">
//                                     <ButtonComponent ref={primaryBtn => (primaryBtn = primaryBtn)} aria-label='menu' cssClass='e-inherit menu' iconCss='e-icons e-menu'></ButtonComponent>
//                                     <span className="prominent">React AppBar Component with Prominent mode</span>
//                                     <div className="e-appbar-spacer"></div>
//                                     <ButtonComponent cssClass='e-inherit login'>FREE TRIAL</ButtonComponent>
//                                 </AppBarComponent>
//                             </div>
//                         </div>
//                         <br />
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <h5>Dense</h5>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <AppBarComponent mode="Dense" colorMode="Primary">
//                                     <ButtonComponent ref={denseBtn => (denseBtn = denseBtn)} aria-label='menu' cssClass='e-inherit menu' iconCss='e-icons e-menu'></ButtonComponent>
//                                     <span className="dense">React AppBar</span>
//                                     <div className="e-appbar-spacer"></div>
//                                     <ButtonComponent cssClass='e-inherit login'>FREE TRIAL</ButtonComponent>
//                                 </AppBarComponent>
//                             </div>
//                         </div>
//                         <br />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Default;