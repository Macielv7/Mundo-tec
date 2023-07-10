
import { useState } from 'react'
import './index.scss'


export default function notificacao() {

    return (
      <main>
        <div className="overlay" data-overlay></div>

        <div className="notification-toast" data-toast>
        
          <button className="toast-close-btn" data-toast-close>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        
          <div className="toast-banner">
            <img src="./img/celular.png" alt="Rose Gold Earrings" width="80" height="70"/>
          </div>
        
          <div className="toast-detail">
        
            <p className="toast-message">
              xxxxxxxxxxxxxx
            </p>
        
            <p className="toast-title">
              Celular xxxxxx
            </p>
        
            <p className="toast-meta">
              <time datetime="PT2M">xxxxxx</time>
            </p>
        
          </div>
        
        </div>
        </main>
        
        

    )
}