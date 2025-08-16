import React from 'react';

export default function Services(props) {
    // You can fully customize this implementation
    // including changing the JSX, CSS and React hooks
    return (        
        <div class="container px-4 py-5" id="price">

            <h1 class="mb-4" style={{'text-align': 'center'}}>Услуги и цены</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4 py-5">
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        {/* <div class="mb-3 fs-4 d-flex">
                            <div class="">Бесплатная online консультация (15-20 минут)</div>
                            <div class="ml-auto">0 ₽</div>
                        </div> */}
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Диагностика ребёнка от 4 до 18 лет - 2500 ₽</div>
                        </h3>
                        <div>
                        Помогает понять особенности психологического развития ребёнка, его сильные и слабые стороны, причины возможных трудностей.
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Оnline консультация (1 час) - 3000 ₽</div>
                        </h3>
                        <div>
                        Удобный формат для родителей, которые хотят обсудить поведение или эмоциональное состояние ребёнка, но не могут приехать лично. На консультации Вы получите чёткий план действий и рекомендации по взаимодействию с ребенком.
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Консультация в кабинете (1 час) - 3000 ₽</div>
                        </h3>
                        <div>
                        Личная встреча в кабинете психолога, на которой мы разберём результаты диагностики, определим причины трудностей и вместе найдём наиболее оптимальные решения. Родители уходят с конкретными шагами для улучшения ситуации.
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="ps-4">
                        <h3 class="fw-bold mb-3 fs-4">
                            <div>Сеанc терапии (1 час) - 3000 ₽</div>
                        </h3>
                        <div>
                        По результатам диагностики составляется индивидуальный план коррекционно-развивающей работы. Индивидуально подбираются терапевтические методы, инструменты и их сочетания (сказочная терапия, песочная терапия, АСТ терапия, ART терапия, МАК карты и д.р.). Коррекционно-развивающие занятия помогают ребёнку справляться с эмоциями, становиться увереннее в себе и раскрывать свой потенциал. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}