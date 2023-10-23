import React from 'react'

function Footer() {
  return (
    <footer style={{
        position: 'fixed',
        background: '#AFAFAF',
        bottom: '0',
        width: '100%',
        height: '113px',
        borderTop: '20px solid #000000',
        color: '#333333',
        textAlign: 'center',
        padding: '20px 0',
        fontSize: '34px',
        fontWeight: '400'
    }}>
    <p style={{
        margin: 'unset',
        display: 'contents'
    }}>SEFE - Sistema Emisor de Firma Electronica</p>
    
  </footer>
  )
}

export default Footer
