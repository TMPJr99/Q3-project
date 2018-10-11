import React from 'react';

const Top = (props) => {


    return (
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div class="container">
              <strong class="navbar-brand">Table Tennis</strong>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="?">Home
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
    )
}

export default Top;