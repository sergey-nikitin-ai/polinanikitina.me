import React from 'react';

export default function AboutMe(props) {
  // You can fully customize this implementation
  // including changing the JSX, CSS and React hooks
  return (
    <div id="about" class="container px-4 py-5 content-space-2 content-space-lg-3">
    <div class="row align-items-md-center">
        <div class="col-md-5 d-block d-md-block">
            <img class="img-fluid rounded-2" src="./img/polina.jpg" alt=""/>
        </div>
        {/* <!-- End Col --> */}

        <div class="col-md-7">
            {/* <!-- Blockquote --> */}
            <figure class="pe-md-7">
                {/* <!-- <div class="mb-4">
            <img class="avatar avatar-xl avatar-4x3" src="./assets/svg/brands/mailchimp-primary.svg" alt="Image Description">
          </div> --> */}

                <h1 class="mb-4">Детский психолог</h1>
                {/* <!-- <blockquote class="blockquote blockquote-lg"> --> */}
                <p>Я — Полина Никитина, педагог-психолог, детский и подростковый психолог, магистр педагогики.
                <p>Специалист по детско-родительским отношениям</p>
                <br/>Автор подкаста "Мам, у меня вопрос..."</p>
                <p>Консультирую родителей по вопросам воспитания, обучения, развития детей<br/> 
                дошкольного, школьного и подрасткового возраста.
                </p>
                {/* <!-- </blockquote> --> */}

                {/* <!-- <figcaption class="blockquote-footer">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 d-md-none">
                <img class="avatar avatar-circle" src="./assets/img/160x160/img4.jpg" alt="Image Description">
              </div>
              <div class="flex-grow-1 ms-3 ms-md-0">
                Lewis
                <span class="blockquote-footer-source">Senior Director of Operations at Mailchimp</span>
              </div>
            </div>
          </figcaption> --> */}

            </figure>
            {/* <!-- End Blockquote --> */}
        </div>
        {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Row --> */}
</div>
  )

}