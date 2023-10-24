import React from 'react'

function Footer() {
  return (
    <footer style={{
      position: 'absolute',
      background: 'rgb(175, 175, 175)',
      width: '100%',
      height: '107px',
      borderTop: '20px solid rgb(0, 0, 0)',
      color: 'rgb(51, 51, 51)',
      padding: '20px 0px',
      fontSize: '34px',
      fontWeight: '400',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <p style={{
        margin: 'unset',
        display: 'contents',
        fontSize: '34px'
    }}>SEFE - Sistema Emisor de Firma Electronica</p>
    
  </footer>
  )
}

export default Footer
