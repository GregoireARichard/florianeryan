<template>
  <div class="allParent">
    <div class="fullPotentialParent">
      <p class="fullPotentialText">{{ $t("full_potential") }}</p>
    </div>
    <div class="header">
      <div class="titlesContainer">
        <h1 class="mainTitle" id="mainTitle">Portfolio</h1>
        <h2 class="name" id="name">Floriane Ryan</h2>
        <div id="svgAccueilParent">
          <svg
            v-rellax="{ speed: 1 }"
            id="svgAccueil"
            class="rellax"
            data-name="svgAccueil"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="518"
            height="733"
            viewBox="0 0 518 1000"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#ffe1ca" />
                <stop offset="1" stop-color="#f6dcc7" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#f0d2bc" />
                <stop offset="1" stop-color="#f0d2bc" />
              </linearGradient>
            </defs>
            <rect
              id="Rectangle_1"
              data-name="Rectangle 1"
              width="214"
              height="661"
              transform="translate(303 19)"
              fill="none"
              stroke="#472c0c"
              stroke-width="2"
            />
            <rect
              id="Rectangle_2"
              data-name="Rectangle 2"
              width="214"
              height="661"
              transform="translate(275 1)"
              fill="none"
              stroke="#bb996f"
              stroke-width="2"
            />
            <path
              id="Fond_rond"
              data-name="Fond rond"
              d="M0,222.5C0,99.617,99.617,0,222.5,0h0C345.383,0,445,99.617,445,222.5V682H0Z"
              transform="translate(0 51)"
              fill="url(#linear-gradient)"
            />
            <path
              id="vagueAccueil1"
              data-name="Vague Accueil 1"
              d="M0,733H445V552.5S340.512,510.719,281,532c-79.275,28.347-118.5,95-222.5,82.5C17.664,609.592,0,733,0,733Z"
              fill="url(#linear-gradient-2)"
            />
            <path
              id="vagueAccueil2"
              data-name="Vague Accueil 2"
              d="M445,733H0V523s80.988,75.719,140.5,97c79.275,28.348,161.2-10.348,241,16.5C420.483,649.616,445,733,445,733Z"
              fill="#fce1cd"
            />
            <path
              id="vagueAccueil3"
              data-name="Vague Accueil 3"
              d="M0,733H445V591s-75.988,67.219-135.5,88.5c-79.275,28.348-135.705-20.848-215.5,6C55.017,698.616,0,733,0,733Z"
              fill="#ffe7d5"
            />
          </svg>
        </div>
        <div class="arrowContainer">
          <a href="#menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="94.977"
              height="100"
              viewBox="0 0 94.977 348.595"
              class="arrow"
            >
              <g id="arrow" data-name="Arrow" transform="translate(-1.876)">
                <path
                  id="Tracé_4"
                  data-name="Tracé 4"
                  d="M49.364,150.253,1.876,68H96.853Z"
                  transform="translate(0 198.342)"
                  fill="#855c2c"
                />
                <path
                  id="Tracé_5"
                  data-name="Tracé 5"
                  d="M14,266.342V0"
                  transform="translate(35.364 0)"
                  fill="none"
                  stroke="#855c2c"
                  stroke-width="4"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div>
      <div class="divider1Parent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="173.582"
          viewBox="0 0 1920 173.582"
          id="divider1"
        >
          <path
            d="M0,111.967l221.284,14.576L450.518,79.5l575.735,94.079,488.282-61.615L1920,0V173.582H0Z"
            fill="#ffede0"
          />
        </svg>
      </div>

      <div class="menuContainer" id="menu">
        <!-- tree stuff-->
        <div class="parentBackgroundMenu">
          <svg
            id="backgroundMenu"
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="962.241"
            viewBox="0 0 1920 962.241"
          >
            <path
              id="Tracé_1"
              data-name="Tracé 1"
              d="M450.71,221.514,0,153.651v421.26L1920,851.484V0L1517.946,416.779,950.717,548.023Z"
              fill="#f2d2ba"
            />
            <path
              id="Tracé_2"
              data-name="Tracé 2"
              d="M1528.189,531.61,522.414,249.916,99.873,179,0,207.81V867.87H1920V482.954Z"
              transform="translate(0 50.196)"
              fill="#f5d8c2"
            />
            <path
              id="Tracé_3"
              data-name="Tracé 3"
              d="M0,218V856.933H397.573l654.938,44.175L1920,856.933v-124.2l-565.949-79.386L679.907,341.561Z"
              transform="translate(0 61.133)"
              fill="#fadfcb"
            />
          </svg>
        </div>
        <div class="treeMenuParent rellax" v-rellax="{ speed: 1.5 }">
          <svg
            width="608"
            height="889"
            viewBox="0 0 608 889"
            id="treeMenu"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M294 244.5L287.5 307.5V333L350.5 302L470.5 226.5L586.5 116L607.5 65.5H491L383.5 104.5L319.5 176L294 244.5Z"
              fill="#A9C069"
            />
            <path
              opacity="0.4"
              d="M586 116L605 67L492 66.5L383 107L321 176.5L296 242V270L306 278.5L351 238L431 165L443.5 138L509.5 111.5L586 116Z"
              fill="url(#paint0_linear_132_57)"
            />
            <path
              d="M261.5 198L265 260.5L256 264L203.5 230.5L117.5 175.5L25 97L0 42H49L173 71L232.5 123L261.5 198Z"
              fill="#B7CE77"
            />
            <path
              opacity="0.3"
              d="M55.5 102.5L70 135L26.5 97.5L1 43H49.5L172.5 72.5L230.5 123.5L261.5 198L259 214.5L230.5 178L124.5 113L98.5 90L55.5 82.5V102.5Z"
              fill="url(#paint1_linear_132_57)"
            />
            <path
              d="M26.5 96L65.5 131.5L25 97L0 42L48.5 41.5L173 71L232.5 123L261.5 198.5L229.5 124.5L171 73L48.5 44H3L26.5 96Z"
              fill="url(#paint2_linear_132_57)"
            />
            <path
              opacity="0.7"
              d="M117 175L257 265L227.5 178.5L152 130.5L109 116L88 128.5V150L117 175Z"
              fill="url(#paint3_linear_132_57)"
            />
            <path
              opacity="0.5"
              d="M286 314.5V333.5L350.5 302L471 225.5L575.5 126.5L523 140L453.5 185.5L407 189L368.5 223L286 314.5Z"
              fill="url(#paint4_linear_132_57)"
            />
            <path
              d="M293.957 511.255L289.196 328.18L359.5 236.5L434 161.5L354.5 232L284.576 306.5L231 177.5L121 110L226.5 181.5L278.087 328.18V567.586L260.5 635L290 607.5L312.5 595.5L293.957 511.255Z"
              fill="#94AA54"
            />
            <path
              d="M231 177.5L269.5 270.5L229.5 178.5L121.5 110L231 177.5Z"
              fill="#DFF996"
            />
            <path
              d="M292.768 630.723L311.413 593.867L299 601.374L288 608.5L265 633L270.71 720.728L247.528 751.195L118.299 784.803L30.1217 816.993L5.02032 842.788L49.3212 846.651L164.313 840.979L221.257 819.536L250.349 784.284L256.047 753.896L275.756 732.176L278.812 734.181L281.502 763.246L302.437 799.819L358.017 840.22L454.67 867.666L561.133 876.347L543.537 849.579L442.479 785.905L335.887 739.337L280.925 719.555L292.768 630.723Z"
              fill="url(#paint5_linear_132_57)"
            />
            <path
              d="M311 587.5L377 582L316 605L270 638.5L178 623.5H270L311 587.5Z"
              fill="url(#paint6_linear_132_57)"
            />
            <path
              d="M278 349L289 328L294 511.5L278 569.5V349Z"
              fill="url(#paint7_linear_132_57)"
            />
            <a href="#designContainer">
              <g filter="url(#filter0_bd_132_57)" id="treeCircle1">
                <circle
                  cx="565.5"
                  cy="123.5"
                  r="29.5"
                  fill="url(#paint8_linear_132_57)"
                  shape-rendering="crispEdges"
                />
              </g>
              <circle
                id="treeShadowCircle1"
                cx="565.5"
                cy="123.5"
                r="28.5"
                stroke="url(#paint9_linear_132_57)"
                stroke-width="2"
              />
            </a>
            <a href="#motionDesignContainer">
              <g filter="url(#filter1_bd_132_57)" id="treeCircle2">
                <circle
                  cx="378"
                  cy="255"
                  r="40"
                  fill="url(#paint10_linear_132_57)"
                  shape-rendering="crispEdges"
                />
              </g>
              <circle
                id="treeShadowCircle2"
                cx="378"
                cy="255"
                r="39"
                stroke="url(#paint11_linear_132_57)"
                stroke-width="2"
              />
            </a>
            <a href="#contactContainer">
              <g filter="url(#filter2_bd_132_57)" id="treeCircle3">
                <ellipse
                  cx="231.5"
                  cy="296"
                  rx="12.5"
                  ry="17"
                  fill="url(#paint12_linear_132_57)"
                  shape-rendering="crispEdges"
                />
              </g>
              <path
                d="M243 296C243 300.504 241.656 304.541 239.533 307.428C237.41 310.316 234.558 312 231.5 312C228.442 312 225.59 310.316 223.467 307.428C221.344 304.541 220 300.504 220 296C220 291.496 221.344 287.459 223.467 284.572C225.59 281.684 228.442 280 231.5 280C234.558 280 237.41 281.684 239.533 284.572C241.656 287.459 243 291.496 243 296Z"
                stroke="url(#paint13_linear_132_57)"
                stroke-width="2"
                id="treeShadowCircle3"
              />
            </a>
            <a href="#aboutContainer">
              <g filter="url(#filter3_bd_132_57)" id="treeCircle4">
                <circle
                  cx="189"
                  cy="61"
                  r="55"
                  fill="url(#paint14_linear_132_57)"
                  shape-rendering="crispEdges"
                />
              </g>
              <circle
                id="treeShadowCircle4"
                cx="189"
                cy="61"
                r="54"
                stroke="url(#paint15_linear_132_57)"
                stroke-width="2"
              />
            </a>
            <defs>
              <filter
                id="filter0_bd_132_57"
                x="522"
                y="81"
                width="86"
                height="87"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="6.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_132_57"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-5" dy="6" />
                <feGaussianBlur stdDeviation="4.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_132_57"
                  result="effect2_dropShadow_132_57"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_132_57"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_bd_132_57"
                x="322"
                y="202"
                width="109"
                height="108"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="6.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_132_57"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-5" dy="4" />
                <feGaussianBlur stdDeviation="5.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_132_57"
                  result="effect2_dropShadow_132_57"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_132_57"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_bd_132_57"
                x="206"
                y="266"
                width="51"
                height="60"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="6.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_132_57"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_132_57"
                  result="effect2_dropShadow_132_57"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_132_57"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_bd_132_57"
                x="108"
                y="-7"
                width="152"
                height="159"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="6.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_132_57"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-5" dy="15" />
                <feGaussianBlur stdDeviation="10.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_132_57"
                  result="effect2_dropShadow_132_57"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_132_57"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_132_57"
                x1="442"
                y1="77"
                x2="465.5"
                y2="173"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BDD677" />
                <stop offset="1" stop-color="#BDD677" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_132_57"
                x1="21.5"
                y1="-23.5"
                x2="137.5"
                y2="202.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DCF29E" />
                <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_132_57"
                x1="157.5"
                y1="106.5"
                x2="195"
                y2="264.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F9FFE8" />
                <stop offset="1" stop-color="#F9FFE8" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_132_57"
                x1="202"
                y1="157.5"
                x2="137"
                y2="208"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A8BE69" />
                <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_132_57"
                x1="382"
                y1="215"
                x2="417.5"
                y2="259"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9BB05F" />
                <stop offset="1" stop-color="#9BB05F" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_132_57"
                x1="294"
                y1="636"
                x2="360"
                y2="924"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EAC4A8" />
                <stop offset="1" stop-color="#EAC4A8" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_132_57"
                x1="278"
                y1="600.5"
                x2="265.5"
                y2="666"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E8CAB4" />
                <stop offset="1" stop-color="#D1A88A" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_132_57"
                x1="278"
                y1="328"
                x2="311"
                y2="570"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7E9246" />
                <stop offset="1" stop-color="#7E9246" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_132_57"
                x1="565.5"
                y1="94"
                x2="565.5"
                y2="153"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3D8C4" />
                <stop offset="1" stop-color="#F3D8C4" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_132_57"
                x1="536"
                y1="83.3607"
                x2="561.631"
                y2="125.918"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_132_57"
                x1="378"
                y1="215"
                x2="378"
                y2="295"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3D8C4" />
                <stop offset="1" stop-color="#F3D8C4" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_132_57"
                x1="338"
                y1="200.574"
                x2="372.754"
                y2="258.279"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_132_57"
                x1="231.5"
                y1="279"
                x2="231.5"
                y2="313"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3D8C4" />
                <stop offset="1" stop-color="#F3D8C4" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_132_57"
                x1="219"
                y1="272.869"
                x2="235.383"
                y2="292.87"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_132_57"
                x1="189"
                y1="6"
                x2="189"
                y2="116"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3D8C4" />
                <stop offset="1" stop-color="#F3D8C4" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint15_linear_132_57"
                x1="134"
                y1="-13.8361"
                x2="181.787"
                y2="65.5082"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <a href="#motionDesignContainer">
            <p class="treeMenuText" id="treeMenuText1">
              {{ $t("navbar_motion") }}
            </p>
          </a>
          <a href="#designContainer">
            <p class="treeMenuText" id="treeMenuText2">
              {{ $t("navbar_des") }}
            </p>
          </a>
          <a href="#aboutContainer">
            <p class="treeMenuText" id="treeMenuText3">{{ $t("about_me") }}</p>
          </a>
          <a href="#contactContainer">
            <p class="treeMenuText" id="treeMenuText4">
              {{ $t("contact_me") }}
            </p>
          </a>
        </div>
      </div>
    </div>

    <div class="aboutContainer" id="aboutContainer">
      <Navbar />
      <div class="aboutmeSubContainer">
        <div class="aboutmeTitleContainer">
          <h2 class="aboutmeTitle">{{ $t("about_me") }}</h2>
        </div>
        <div class="aboutmeFlexContainer">
          <div class="aboutImgContainer">
            <img
              :src="require('../assets/img/about.png')"
              alt="about me"
              class="aboutmeImg"
            />
          </div>
          <div class="aboutTextContainer">
            <p class="aboutText">{{ $t("about_text1") }}</p>
            <p class="aboutText">{{ $t("about_text2") }}</p>
            <p class="aboutText">{{ $t("about_text3") }}</p>
            <p class="aboutText">{{ $t("about_text4") }}</p>
          </div>
        </div>
      </div>
      <svg
        v-rellax="{ speed: 1.5 }"
        class="rellax"
        width="543"
        height="437"
        viewBox="0 0 543 437"
        fill="none"
        id="decorationTree1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_216_4)">
          <path
            d="M275.168 302.194L260.193 325.079L262.829 328.366L289.983 327.143L334.491 325.093L386.588 315.569L408.049 300.213L389.535 289.524L336.349 273.447L302.509 280.143L275.168 302.194Z"
            fill="#ABC16E"
          />
          <path
            opacity="0.3"
            d="M373.543 311.027L361.024 320.099L385.55 315.452L406.99 300.497L388.724 289.951L335.994 274.302L303.074 280.874L275.22 302.157L272.578 308.907L291.238 301.374L345.276 299.973L360.063 296.975L377.886 303.504L373.543 311.027Z"
            fill="url(#paint0_linear_216_4)"
          />
          <path
            d="M386.187 314.961L363.735 319.826L386.536 315.665L407.94 300.401L389.728 289.635L336.284 273.594L302.5 280.203L275.127 302.316L303.307 281.423L336.604 274.784L389.184 290.577L406.372 300.5L386.187 314.961Z"
            fill="url(#paint1_linear_216_4)"
          />
          <path
            opacity="0.7"
            d="M334.853 325.385L261.728 328.626L291.908 302.358L331.226 300.813L350.811 304.797L356.093 314.16L351.391 322.305L334.853 325.385Z"
            fill="url(#paint2_linear_216_4)"
          />
          <path
            d="M279.862 184.666L285.436 238.696V260.565L231.406 233.979L128.493 169.229L29.0096 74.4628L10.9998 31.1533H110.912L203.105 64.6002L257.992 125.92L279.862 184.666Z"
            fill="#A9C069"
          />
          <path
            opacity="0.4"
            d="M29.4403 74.4641L13.1456 32.441L110.056 32.0122L203.536 66.7456L256.708 126.35L278.148 182.523V206.537L269.572 213.826L230.979 179.093L162.37 116.487L151.65 93.3316L95.0477 70.6048L29.4403 74.4641Z"
            fill="url(#paint3_linear_216_4)"
          />
          <path
            d="M307.734 144.788L304.732 198.389L312.451 201.39L357.476 172.66L431.23 125.491L510.56 58.1687L532 11H489.977L383.633 35.8708L332.605 80.4667L307.734 144.788Z"
            fill="#B7CE77"
          />
          <path
            opacity="0.3"
            d="M484.399 62.8854L471.964 90.7579L509.27 58.5974L531.139 11.8574H489.545L384.059 37.157L334.317 80.8953L307.731 144.788L309.875 158.938L334.317 127.635L425.224 71.8904L447.522 52.1653L484.399 45.7332V62.8854Z"
            fill="url(#paint4_linear_216_4)"
          />
          <path
            opacity="0.7"
            d="M431.656 125.062L311.59 202.247L336.889 128.064L401.639 86.8983L438.516 74.4629L456.526 85.1831V103.622L431.656 125.062Z"
            fill="url(#paint5_linear_216_4)"
          />
          <path
            opacity="0.5"
            d="M286.723 244.699V260.994L231.407 233.979L128.065 168.372L38.444 83.4678L83.4688 95.0456L143.073 134.067L182.952 137.069L215.97 166.227L286.723 244.699Z"
            fill="url(#paint6_linear_216_4)"
          />
          <path
            d="M231.305 402.318L283.985 256.432L223.691 177.806L159.799 113.485L227.979 173.947L287.946 237.839L333.894 127.207L428.232 69.3184L337.753 130.638L293.512 256.432L249.285 402.318L231.305 425.272L217.15 420.298L231.305 402.318Z"
            fill="#94AA54"
          />
          <path
            d="M333.889 127.207L300.871 206.965L335.176 128.065L427.798 69.3184L333.889 127.207Z"
            fill="#DFF996"
          />
          <path
            d="M319.125 241.925L318.111 254.206L328.589 246.432L340.532 240.46H353.714L361.375 241.925V245.53L352.362 257.473L344.25 263.782L326.899 269.416L330.617 271.894L339.743 278.767L345.94 286.879L351.348 296.681V302.54L343.348 303.892L334.11 298.484L325.547 291.16L316.308 280.57V285.64L313.942 293.301L309.21 300.287L300.422 308.511H295.577L292.197 298.484V289.02L295.577 280.57L301.323 273.922H290.845L274.509 271.894L261.101 265.022L258.848 260.064L263.58 254.206L274.509 250.713H287.127L300.422 254.206L304.591 259.163L298.507 232.461L300.422 220.518L304.591 214.096L310.9 216.462L316.308 225.588L319.125 241.925Z"
            fill="#F8F8F8"
          />
          <path
            d="M314.731 239.672L319.125 242.264L318.111 254.207L327.688 247.221H331.181L336.702 249.587L342.56 253.643L345.152 259.389L344.25 263.896L326.899 269.529L331.181 272.233L336.702 276.515L337.828 278.43V284.289L336.251 289.471L332.082 290.711L325.209 291.049L316.309 280.796V285.641L314.281 291.95H310.901L302.901 290.711L298.62 287.781L295.465 280.796L301.324 273.923H290.733L282.847 270.881L279.354 265.924L279.692 259.164L283.185 253.981L287.128 250.714L300.423 254.207L302.338 256.46L303.465 255.221L301.437 244.968L303.465 240.574L307.408 237.982L314.731 239.672Z"
            fill="url(#paint7_radial_216_4)"
          />
          <path
            opacity="0.8"
            d="M326.224 265.81L323.971 269.077L324.985 270.204L321.943 273.133L322.168 274.372L318.562 274.71L316.985 277.076L312.478 278.09L307.972 276.4L303.014 273.584L300.648 268.401L297.832 267.274L296.818 264.908L300.648 264.345L303.014 262.092L300.648 258.486L303.014 255.444L304.254 252.064L307.183 254.543L310.563 253.304L312.478 250.149L314.168 253.754H316.985L318.562 256.12H321.943L324.985 259.388L321.943 263.669L326.224 265.81Z"
            fill="white"
          />
          <path
            d="M319.124 262.542L321.04 266.373L320.589 267.162V268.401L319.35 269.64H318.11V270.993L317.209 271.781L315.857 270.655L314.054 271.443V273.471L312.702 275.049L311.463 275.387L310.111 272.795L311.913 271.781L311.463 269.64L309.885 270.091L307.97 269.64L307.632 271.443L305.829 273.021L305.379 269.64L304.027 267.162L302.787 265.472L304.027 264.007L305.829 262.204L305.041 259.613L307.069 257.472L309.885 258.148L313.265 257.472L316.758 259.162L319.124 262.542Z"
            fill="#F7E194"
          />
          <path
            d="M315.073 265.361L315.523 266.6L313.608 268.966H310.679L308.989 267.389L306.623 264.91L306.172 260.967L307.975 259.164L309.665 258.375H312.143L314.847 259.953L316.087 262.206L315.073 265.361Z"
            fill="#FFF37B"
          />
          <path
            d="M313.345 264.414L313.611 265.126L312.48 266.485H310.749L309.75 265.579L308.352 264.155L308.086 261.89L309.151 260.854L310.149 260.401H311.614L313.212 261.308L313.944 262.602L313.345 264.414Z"
            fill="#FFF8AE"
          />
          <path
            d="M315.857 225.814L310.899 216.462L316.42 225.814L319.124 242.038L317.885 255.445L318.561 242.038L315.857 225.814Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_216_4"
            x="-0.000244141"
            y="0"
            width="543"
            height="436.272"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="5.5"
              result="effect1_foregroundBlur_216_4"
            />
          </filter>
          <linearGradient
            id="paint0_linear_216_4"
            x1="413.711"
            y1="271.025"
            x2="321.003"
            y2="330.905"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DCF29E" />
            <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_216_4"
            x1="334.419"
            y1="290.346"
            x2="285.962"
            y2="341.741"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F9FFE8" />
            <stop offset="1" stop-color="#F9FFE8" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_216_4"
            x1="306.235"
            y1="300.022"
            x2="319.755"
            y2="333.578"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#97AB5D" />
            <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_216_4"
            x1="152.937"
            y1="41.0171"
            x2="132.783"
            y2="123.348"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#BDD677" />
            <stop offset="1" stop-color="#BDD677" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_216_4"
            x1="513.558"
            y1="-45.1739"
            x2="414.075"
            y2="148.647"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DCF29E" />
            <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_216_4"
            x1="358.758"
            y1="110.054"
            x2="414.503"
            y2="153.363"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A8BE69" />
            <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_216_4"
            x1="204.392"
            y1="159.367"
            x2="173.947"
            y2="197.102"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9BB05F" />
            <stop offset="1" stop-color="#9BB05F" stop-opacity="0" />
          </linearGradient>
          <radialGradient
            id="paint7_radial_216_4"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(312.253 264.966) rotate(90.1698) scale(38.0254 46.3609)"
          >
            <stop stop-color="#CECECE" />
            <stop offset="1" stop-color="#F3F2F1" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="designContainer" id="designContainer">
      <svg
        width="1440"
        height="129"
        viewBox="0 0 1440 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="divider2"
      >
        <path
          d="M167 93L0 82V0H1440L1143 82L774.5 128.5L340 57.5L167 93Z"
          fill="#E3C7B2"
        />
      </svg>
      <div id="flowerParent1" >
        <svg
          width="234"
          height="262"
          viewBox="0 0 234 262"
          fill="none"
          id="flower1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74.7295 152.054L113.681 156.67L119.452 156.67L122.914 153.208L148.882 108.486L138.495 88.577L134.455 64.629L124.357 45.5859L106.179 60.301L102.717 69.2455L94.9267 108.486L48.4732 101.272L17.6004 104.446L5.70066e-06 110.794L43.5682 145.129L74.7295 152.054Z"
            fill="#F8F8F8"
          />
          <path
            d="M82.2305 110.795L48.4724 101.274L83.6732 107.044L105.024 63.7646L105.602 68.0926L125.51 72.4206L134.455 64.6302L138.494 88.5783L144.842 100.985L144.842 105.602L118.297 155.806L113.103 156.96L75.8828 152.344L43.8559 145.419L0.576237 110.795L35.2 127.53L69.5351 137.052L80.2108 130.415L82.2305 110.795Z"
            fill="url(#paint0_linear_227_26)"
          />
          <path
            d="M112.818 66.651L158.118 121.183L158.118 136.764L139.075 159.847L119.455 156.673L81.3686 136.764L78.7718 121.183L61.7485 107.622L78.7718 109.931L64.3453 95.5041L71.27 95.5041L71.27 84.8285L68.9617 79.6349L75.598 79.6349L75.598 69.2478L84.5424 75.0184L92.9098 61.1689L103.874 69.2478L112.818 66.651Z"
            fill="white"
          />
          <path
            d="M96.6602 173.119L113.683 156.384L125.513 156.384L146.576 149.748L134.458 187.545L121.474 223.9L108.201 246.982L108.201 261.409L96.6602 256.504L87.7157 240.923L84.8304 208.031L96.6602 173.119Z"
            fill="#F8F8F8"
          />
          <path
            d="M169.658 114.259L159.27 120.03L151.48 130.706L146.864 149.46L174.563 159.27L215.534 163.31L234 171.965L234 154.365L219.285 133.302L195.337 117.722L169.658 114.259Z"
            fill="#F8F8F8"
          />
          <path
            d="M167.342 105.602L164.746 116.855L164.746 123.203L155.513 123.203L144.837 105.602L146.857 71.2671L164.746 26.5448L186.385 -3.63228e-06L189.271 47.0305L182.923 67.8048L167.342 105.602Z"
            fill="#F8F8F8"
          />
          <path
            d="M96.3724 82.8071L103.586 94.9254L102.432 96.0796L94.3527 96.0796L96.9494 108.486L94.3527 111.083L91.4673 107.621L83.3885 105.601L77.6179 96.0796L85.4082 82.8071L96.3724 82.8071Z"
            fill="#FFF37B"
          />
          <path
            d="M97.5265 87.4236L93.4871 82.8071L96.6609 82.8071L103.586 94.9254L102.432 96.3681L94.2565 96.3681L96.9494 108.486L94.3527 111.083L91.4673 107.621L83.3885 105.601L77.6179 95.791L81.0802 90.0204L79.9261 95.791L85.4082 100.985L90.0247 100.408L92.6215 98.0993L96.0838 93.7713L97.5265 87.4236Z"
            fill="#F7E481"
          />
          <path
            d="M151.766 72.1318L164.749 26.5439L146.86 71.5548L144.552 105.313L155.516 123.202L156.959 123.202L164.749 117.143L167.635 105.313L183.504 66.9383L189.275 47.0296L173.405 80.4992L159.844 98.0996L153.497 94.0602L151.766 72.1318Z"
            fill="url(#paint1_linear_227_26)"
          />
          <path
            d="M172.831 118.876L195.625 117.722L169.658 114.259L164.464 117.145L157.251 122.915L151.48 130.994L146.864 149.749L174.274 159.27L215.534 163.31L222.17 166.772L214.668 160.713L179.468 153.499L164.464 139.65L163.021 129.84L172.831 118.876Z"
            fill="url(#paint2_linear_227_26)"
          />
          <path
            d="M113.392 156.384L117.72 155.807L125.799 156.384L147.439 149.748L134.743 186.968L121.759 223.611L108.198 246.982L108.198 261.409L96.6572 256.793L104.736 255.35L106.179 243.809L119.74 220.726L129.55 191.007L128.107 174.273L116.277 171.964L106.179 174.273L94.9261 191.007L84.5389 209.473L96.3687 173.119L113.392 156.384Z"
            fill="url(#paint3_linear_227_26)"
          />
          <path
            d="M157.251 122.913L145.133 105.601L128.686 85.6928L112.529 66.6497L103.584 68.958L98.9677 65.4956L115.125 82.2304L106.181 83.3845L98.9677 78.768L96.3709 82.2304L103.584 94.9258L102.43 96.3684L94.0626 96.3684L96.9479 108.487L94.0626 111.083L91.4658 107.621L83.387 105.601L85.9838 113.68L76.1737 113.68L79.059 121.471L81.3673 136.763L117.722 155.806L125.801 156.383L147.441 150.035L151.48 130.992L157.251 122.913Z"
            fill="url(#paint4_linear_227_26)"
          />
          <path
            d="M80.2149 120.027L70.4048 114.545L78.4837 120.893L81.369 137.05L118.012 156.093L83.1002 136.185L80.2149 120.027Z"
            fill="white"
          />
          <path
            d="M82.5195 87.7122L85.4048 82.8071L92.041 82.8071L92.6181 85.6924L92.3296 89.1548L87.136 92.9057L81.9424 92.3286L82.5195 87.7122Z"
            fill="#FFF8B3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_227_26"
              x1="82.2306"
              y1="165.328"
              x2="17.0225"
              y2="119.163"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#ECEBE9" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_227_26"
              x1="166.769"
              y1="201.971"
              x2="159.267"
              y2="30.2948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#D9D3C0" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_227_26"
              x1="149.749"
              y1="152.345"
              x2="201.107"
              y2="128.397"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#F2F0EC" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_227_26"
              x1="126.664"
              y1="150.036"
              x2="104.736"
              y2="229.382"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#F1F0ED" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_227_26"
              x1="137.631"
              y1="147.15"
              x2="65.2095"
              y2="100.985"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DBDBDB" />
              <stop offset="1" stop-color="#F2F1EF" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="designSubContainer">
        <div class="">
          <div class="designTitleContainer">
            <h2 class="designTitle">{{ $t("navbar_des") }}</h2>
          </div>
          <div class="designCarouselContainer" id="designCarouselContainer">
            <div id="carousel1" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
                <li data-target="#demo" data-slide-to="4"></li>
                <li data-target="#demo" data-slide-to="5"></li>
              </ul>

              <!-- The slideshow -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="carouselFlex">
                    <div class="designFlexLeft">
                      <img
                        :src="require('../assets/img/synerg.png')"
                        alt="synerg pic"
                        class="carouselImg"
                      />
                    </div>
                    <div class="designFlexRight">
                      <div class="projectDesignTitleContainer">
                        <h3 class="projectDesignTitle">
                          {{ $t("synerg_title") }}
                        </h3>
                      </div>
                      <p class="projectDesignText">
                        {{ $t("synerg_text") }} <br />
                        {{ $t("synerg_text2") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carouselFlex">
                    <div class="designFlexLeft">
                      <img
                        :src="require('../assets/img/clothing.png')"
                        alt="clothing pic"
                        class="carouselImg"
                      />
                    </div>
                    <div class="designFlexRight">
                      <div class="projectDesignTitleContainer">
                        <h3 class="projectDesignTitle">
                          {{ $t("clothing_title") }}
                        </h3>
                      </div>
                      <p class="projectDesignText">
                        {{ $t("clothing_text") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carouselFlex">
                    <div class="designFlexLeft">
                      <img
                        :src="require('../assets/img/netflix.png')"
                        alt="netflix poster pic"
                        class="carouselImg"
                      />
                    </div>                  
                    <div class="designFlexRight">
                      <div class="projectDesignTitleContainer">
                        <h3 class="projectDesignTitle">
                          {{ $t("netflix_title") }}
                        </h3>
                      </div>
                      <p class="projectDesignText">
                        {{ $t("netflix_content") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carouselFlex">
                    <div class="designFlexLeft">
                      <img
                        :src="require('../assets/img/instagram.png')"
                        alt="instagram feed pic"
                        class="carouselImg"
                      />
                    </div>
                    <div class="designFlexRight">
                      <div class="projectDesignTitleContainer">
                        <h3 class="projectDesignTitle">
                          {{ $t("insta_title") }}
                        </h3>
                      </div>
                      <p class="projectDesignText">
                        {{ $t("insta_text") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carouselFlex">
                    <div class="designFlexLeft">
                      <img
                        :src="require('../assets/img/christmas.png')"
                        alt="christmas poster pic"
                        class="carouselImg"
                      />
                    </div>
                    <div class="designFlexRight">
                      <div class="projectDesignTitleContainer">
                        <h3 class="projectDesignTitle">
                          {{ $t("christmas_title") }}
                        </h3>
                      </div>
                      <p class="projectDesignText">
                        {{ $t("christmas_content") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carouselFlex">
                    <div class="designFlexLeft">                      
                      <img
                        :src="require('../assets/img/alcool.png')"
                        alt="Alcohol branding pic"
                        class="carouselImg"
                      />
                    </div>
                    <div class="designFlexRight">
                      <div class="projectDesignTitleContainer">
                        <h3 class="projectDesignTitle">
                          {{ $t("alcohol_title") }}
                        </h3>
                      </div>
                      <p class="projectDesignText">
                        {{ $t("alcohol_text") }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-next"
                href="#carousel1"
                role="button"
                data-slide="next"
              >
                <svg
                  class="whiteArrow carousel-control-next-icon"
                  aria-hidden="true"
                  width="252"
                  height="79"
                  viewBox="0 0 252 100"
                  fill="none"
                >
                  <path
                    id="whietArrowPath2"
                    d="M251.107 39.5L191.857 73.708L191.857 5.29199L251.107 39.5Z"
                    fill="white"
                  />
                  <path
                    id="whietArrowPath1"
                    d="M191.857 39.5L-1.63913e-05 39.5"
                    stroke="white"
                    stroke-width="3"
                  />
                </svg>
              </a>
              <!-- Left and right controls -->
            </div>
          </div>
        </div>
      </div>
      <div class="designDividerParent" id="designDividerParent">
        <svg
          width="1441"
          height="381"
          viewBox="0 0 1441 381"
          fill="none"
          id="designDivider"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M272 210.385L1052.5 158.5L1440.5 36V302V377H1044.5H0.5V321.5L272 210.385Z"
            fill="#F5D8C2"
          />
          <path
            d="M0.5 355.999H337L919.5 240L1440.5 189.5V380.5H0.5V355.999Z"
            fill="#FADFCB"
          />
          <path
            d="M663.905 267.756L662.216 284.128V290.755L678.588 282.699L709.774 263.078L739.92 234.361L745.377 221.237H715.101L687.164 231.373L670.532 249.954L663.905 267.756Z"
            fill="#A9C069"
          />
          <path
            opacity="0.4"
            d="M739.79 234.361L744.728 221.627L715.361 221.497L687.034 232.022L670.922 250.084L664.425 267.106V274.383L667.024 276.592L678.718 266.067L699.509 247.095L702.757 240.079L719.909 233.192L739.79 234.361Z"
            fill="url(#paint0_linear_253_1140)"
          />
          <path
            d="M655.459 255.671L656.368 271.914L654.029 272.823L640.386 264.117L618.036 249.824L593.997 229.423L587.5 215.13H600.234L632.459 222.666L647.922 236.18L655.459 255.671Z"
            fill="#B7CE77"
          />
          <path
            opacity="0.3"
            d="M601.924 230.853L605.692 239.299L594.387 229.553L587.76 215.39H600.365L632.33 223.056L647.403 236.31L655.459 255.671L654.81 259.959L647.403 250.474L619.856 233.581L613.099 227.604L601.924 225.655V230.853Z"
            fill="url(#paint1_linear_253_1140)"
          />
          <path
            d="M594.387 229.163L604.522 238.389L593.997 229.423L587.5 215.13L600.104 215L632.459 222.666L647.922 236.18L655.459 255.801L647.143 236.57L631.94 223.186L600.104 215.65H588.28L594.387 229.163Z"
            fill="url(#paint2_linear_253_1140)"
          />
          <path
            opacity="0.7"
            d="M617.908 249.694L654.291 273.084L646.625 250.604L627.004 238.13L615.829 234.361L610.371 237.61V243.197L617.908 249.694Z"
            fill="url(#paint3_linear_253_1140)"
          />
          <path
            opacity="0.5"
            d="M661.825 285.947V290.885L678.588 282.699L709.903 262.818L737.061 237.09L723.417 240.598L705.355 252.423L693.271 253.332L683.266 262.168L661.825 285.947Z"
            fill="url(#paint4_linear_253_1140)"
          />
          <path
            d="M663.893 337.08L662.656 289.502L680.926 265.677L700.287 246.186L679.627 264.507L661.455 283.868L647.532 250.344L618.945 232.802L646.362 251.383L659.769 289.502V351.72L655.198 369.239L662.865 362.092L668.712 358.974L663.893 337.08Z"
            fill="#94AA54"
          />
          <path
            d="M647.533 250.344L657.538 274.513L647.143 250.604L619.076 232.802L647.533 250.344Z"
            fill="#DFF996"
          />
          <path
            d="M973.749 210.243L972.749 219.939V223.864L982.445 219.093L1000.91 207.473L1018.77 190.466L1022 182.693H1004.07L987.524 188.696L977.674 199.7L973.749 210.243Z"
            fill="#A9C069"
          />
          <path
            opacity="0.4"
            d="M1018.69 190.466L1021.62 182.925L1004.22 182.848L987.447 189.081L977.905 199.778L974.057 209.859V214.168L975.596 215.476L982.522 209.243L994.835 198.008L996.759 193.852L1006.92 189.774L1018.69 190.466Z"
            fill="url(#paint5_linear_253_1140)"
          />
          <path
            d="M968.747 203.087L969.286 212.706L967.901 213.245L959.821 208.089L946.584 199.624L932.348 187.542L928.5 179.077H936.042L955.126 183.541L964.284 191.544L968.747 203.087Z"
            fill="#B7CE77"
          />
          <path
            opacity="0.3"
            d="M937.042 188.388L939.274 193.39L932.579 187.619L928.654 179.23H936.119L955.05 183.771L963.977 191.62L968.748 203.086L968.363 205.626L963.977 200.008L947.662 190.004L943.66 186.464L937.042 185.31V188.388Z"
            fill="url(#paint6_linear_253_1140)"
          />
          <path
            d="M932.579 187.388L938.581 192.852L932.348 187.542L928.5 179.077L935.965 179L955.126 183.54L964.284 191.544L968.747 203.164L963.822 191.774L954.819 183.848L935.965 179.385H928.962L932.579 187.388Z"
            fill="url(#paint7_linear_253_1140)"
          />
          <path
            opacity="0.7"
            d="M946.508 199.546L968.055 213.398L963.515 200.085L951.895 192.698L945.277 190.466L942.044 192.39V195.699L946.508 199.546Z"
            fill="url(#paint8_linear_253_1140)"
          />
          <path
            d="M971.599 241.308L971.902 246.724L971.123 247.028L966.58 244.125L959.138 239.358L951.133 232.555L948.97 227.789H953.21L963.941 230.302L969.09 234.809L971.599 241.308Z"
            fill="#ABC16E"
          />
          <path
            opacity="0.3"
            d="M953.825 233.069L955.076 235.869L951.324 232.639L949.124 227.943H953.308L963.918 230.485L968.921 234.879L971.595 241.297L971.379 242.719L968.921 239.574L959.777 233.974L957.534 231.993L953.825 231.346V233.069Z"
            fill="url(#paint9_linear_253_1140)"
          />
          <path
            d="M951.262 232.491L954.637 235.553L951.133 232.577L948.97 227.832L953.166 227.789L963.938 230.334L969.085 234.82L971.594 241.333L968.826 234.949L963.764 230.506L953.166 228.005H949.229L951.262 232.491Z"
            fill="url(#paint10_linear_253_1140)"
          />
          <path
            opacity="0.7"
            d="M959.047 239.373L971.287 247.182L968.708 239.677L962.107 235.512L958.348 234.254L956.512 235.339V237.204L959.047 239.373Z"
            fill="url(#paint11_linear_253_1140)"
          />
          <path
            opacity="0.5"
            d="M972.518 221.017V223.941L982.445 219.093L1000.99 207.319L1017.07 192.082L1008.99 194.16L998.298 201.163L991.141 201.701L985.216 206.934L972.518 221.017Z"
            fill="url(#paint12_linear_253_1140)"
          />
          <path
            d="M973.141 232.593L972.826 235.637V236.87L975.886 235.372L981.715 231.723L987.35 226.382L988.371 223.941H982.711L977.489 225.826L974.38 229.282L973.141 232.593Z"
            fill="#A9C069"
          />
          <path
            opacity="0.4"
            d="M987.299 226.349L988.217 223.966L982.758 223.941L977.491 225.911L974.496 229.292L973.288 232.478V233.84L973.771 234.253L975.945 232.283L979.811 228.733L980.414 227.419L983.603 226.13L987.299 226.349Z"
            fill="url(#paint13_linear_253_1140)"
          />
          <path
            opacity="0.5"
            d="M972.826 235.952V236.87L975.912 235.348L981.677 231.651L986.678 226.866L984.166 227.519L980.84 229.718L978.615 229.887L976.773 231.53L972.826 235.952Z"
            fill="url(#paint14_linear_253_1140)"
          />
          <path
            d="M976.596 264.266L973.742 251.3L973.376 237.211V236.408L976.75 231.714L978.674 229.79L976.288 231.714L973.376 235.331V233.176L973.009 223.123L983.83 209.013L995.296 197.469L983.06 208.32L972.299 219.786L964.053 199.932L947.123 189.543L963.36 200.548L971.3 223.123V245.566L968.747 239.717L962.206 235.562L960.205 234.869L962.206 236.024L968.439 240.025L971.3 247.182V259.97L968.593 270.345L973.133 266.113L976.596 264.266Z"
            fill="#94AA54"
          />
          <path
            d="M964.053 199.932L969.978 214.245L963.822 200.086L947.2 189.543L964.053 199.932Z"
            fill="#DFF996"
          />
          <path
            d="M1340.5 124.975L1336.5 163.76V179.459L1375.28 160.374L1440.5 119.34L1440.49 22.5L1395.6 38.7853L1356.2 82.8034L1340.5 124.975Z"
            fill="#A9C069"
          />
          <path
            opacity="0.4"
            d="M1424.84 76.0318L1432.54 59.4095L1440.5 56.2117V23.5264L1395.29 40.3248L1357.12 83.1116L1341.73 123.436V140.674L1347.89 145.907L1375.59 120.973L1424.84 76.0318Z"
            fill="url(#paint15_linear_253_1140)"
          />
          <path
            d="M1320.49 96.3471L1322.64 134.824L1317.1 136.979L1284.78 116.355L1231.84 82.4953L1174.89 34.1677L1159.5 0.307617H1189.67L1266.01 18.1611L1302.64 50.1743L1320.49 96.3471Z"
            fill="#B7CE77"
          />
          <path
            opacity="0.3"
            d="M1193.67 37.5543L1202.6 57.5625L1175.81 34.4761L1160.12 0.923828H1189.97L1265.7 19.0851L1301.41 50.4827L1320.49 96.3477L1318.95 106.506L1301.41 84.0349L1236.15 44.0185L1220.14 29.8588L1193.67 25.2415V37.5543Z"
            fill="url(#paint16_linear_253_1140)"
          />
          <path
            d="M1175.81 33.5523L1199.82 55.4074L1174.89 34.1679L1159.5 0.307819L1189.36 0L1266.01 18.1613L1302.64 50.1745L1320.49 96.6551L1300.79 51.0979L1264.77 19.3926L1189.36 1.53909H1161.35L1175.81 33.5523Z"
            fill="url(#paint17_linear_253_1140)"
          />
          <path
            opacity="0.7"
            d="M1231.53 82.1879L1317.72 137.595L1299.56 84.3426L1253.08 54.792L1226.61 45.8652L1213.68 53.5607V66.7969L1231.53 82.1879Z"
            fill="url(#paint18_linear_253_1140)"
          />
          <path
            d="M1331.9 249.234L1333.11 270.899L1329.99 272.112L1311.82 260.499L1282.05 241.434L1250.03 214.223L1241.38 195.157H1258.34L1301.26 205.21L1321.86 223.235L1331.9 249.234Z"
            fill="#ABC16E"
          />
          <path
            opacity="0.3"
            d="M1260.8 216.277L1265.8 227.477L1250.79 214.554L1242 195.772H1258.73L1301.17 205.939L1321.18 223.514L1331.88 249.188L1331.02 254.874L1321.18 242.295L1284.61 219.895L1275.64 211.969L1260.8 209.385V216.277Z"
            fill="url(#paint19_linear_253_1140)"
          />
          <path
            d="M1250.55 213.964L1264.05 226.214L1250.03 214.309L1241.38 195.33L1258.16 195.157L1301.25 205.337L1321.84 223.281L1331.88 249.333L1320.8 223.798L1300.56 206.027L1258.16 196.02H1242.42L1250.55 213.964Z"
            fill="url(#paint20_linear_253_1140)"
          />
          <path
            opacity="0.7"
            d="M1281.69 241.491L1330.65 272.727L1320.33 242.706L1293.93 226.046L1278.89 221.014L1271.55 225.352V232.814L1281.69 241.491Z"
            fill="url(#paint21_linear_253_1140)"
          />
          <path
            opacity="0.5"
            d="M1335.57 168.069V179.766L1375.28 160.374L1440.5 118.97V87.4688L1438.69 88.6517L1410.07 90.8064L1386.36 111.738L1335.57 168.069Z"
            fill="url(#paint22_linear_253_1140)"
          />
          <path
            d="M1338.07 214.371L1336.8 226.55V231.48L1349.05 225.487L1372.36 210.891L1394.9 189.529L1398.98 179.767H1376.35L1355.46 187.306L1343.02 201.129L1338.07 214.371Z"
            fill="#A9C069"
          />
          <path
            opacity="0.4"
            d="M1394.7 189.398L1398.37 179.864L1376.53 179.767L1355.46 187.646L1343.48 201.169L1338.65 213.913V219.361L1340.58 221.014L1349.28 213.134L1364.74 198.931L1367.16 193.678L1379.91 188.522L1394.7 189.398Z"
            fill="url(#paint23_linear_253_1140)"
          />
          <path
            opacity="0.5"
            d="M1336.8 227.807V231.48L1349.15 225.391L1372.21 210.602L1392.21 191.464L1382.16 194.074L1368.86 202.87L1359.96 203.546L1352.59 210.119L1336.8 227.807Z"
            fill="url(#paint24_linear_253_1140)"
          />
          <path
            d="M1351.89 341.063L1340.47 289.199L1339.01 232.845V229.633L1352.5 210.856L1360.2 203.16L1350.66 210.856L1339.01 225.323V216.704L1337.54 176.491L1380.82 120.049L1426.69 73.8762L1377.74 117.279L1334.7 163.144L1301.71 83.7264L1233.99 42.1709L1298.94 86.189L1330.7 176.491V266.263L1320.49 242.869L1294.33 226.247L1286.32 223.476L1294.33 228.094L1319.26 244.1L1330.7 272.727V323.878L1319.87 365.381L1338.04 348.451L1351.89 341.063Z"
            fill="#94AA54"
          />
          <path
            d="M1301.71 83.7265L1325.42 140.981L1300.79 84.3421L1234.3 42.1709L1301.71 83.7265Z"
            fill="#DFF996"
          />
          <path
            d="M1362.88 178.247L1351.39 179.608L1349.69 179.608L1348.67 178.587L1341.01 165.399L1344.07 159.528L1345.26 152.466L1348.24 146.851L1353.6 151.19L1354.62 153.828L1356.92 165.399L1370.62 163.272L1379.72 164.208L1384.91 166.08L1372.06 176.205L1362.88 178.247Z"
            fill="#F8F8F8"
          />
          <path
            d="M1360.66 166.08L1370.62 163.272L1360.24 164.974L1353.94 152.211L1353.77 153.487L1347.9 154.763L1345.26 152.466L1344.07 159.528L1342.2 163.187L1342.2 164.548L1350.03 179.353L1351.56 179.693L1362.53 178.332L1371.98 176.29L1384.74 166.08L1374.53 171.015L1364.41 173.822L1361.26 171.866L1360.66 166.08Z"
            fill="url(#paint25_linear_253_1140)"
          />
          <path
            d="M1351.64 153.062L1338.28 169.143L1338.28 173.738L1343.9 180.544L1349.69 179.608L1360.92 173.738L1361.68 169.143L1366.7 165.144L1361.68 165.825L1365.94 161.57L1363.9 161.57L1363.9 158.422L1364.58 156.891L1362.62 156.891L1362.62 153.828L1359.98 155.529L1357.51 151.445L1354.28 153.828L1351.64 153.062Z"
            fill="white"
          />
          <path
            d="M1356.41 184.458L1351.39 179.523L1347.9 179.523L1341.69 177.566L1345.26 188.713L1349.09 199.433L1353 206.24L1353 210.494L1356.41 209.048L1359.05 204.453L1359.9 194.754L1356.41 184.458Z"
            fill="#F8F8F8"
          />
          <path
            d="M1334.88 167.101L1337.94 168.802L1340.24 171.95L1341.6 177.481L1333.43 180.374L1321.35 181.565L1315.91 184.118L1315.91 178.927L1320.25 172.716L1327.31 168.122L1334.88 167.101Z"
            fill="#F8F8F8"
          />
          <path
            d="M1335.56 164.548L1336.33 167.867L1336.33 169.738L1339.05 169.738L1342.2 164.548L1341.6 154.423L1336.33 141.235L1329.95 133.407L1329.1 147.276L1330.97 153.402L1335.56 164.548Z"
            fill="#F8F8F8"
          />
          <path
            d="M1356.49 157.826L1354.37 161.4L1354.71 161.74L1357.09 161.74L1356.32 165.399L1357.09 166.164L1357.94 165.143L1360.32 164.548L1362.02 161.74L1359.73 157.826L1356.49 157.826Z"
            fill="#FFF37B"
          />
          <path
            d="M1356.15 159.188L1357.34 157.826L1356.41 157.826L1354.37 161.4L1354.71 161.825L1357.12 161.825L1356.32 165.399L1357.09 166.164L1357.94 165.143L1360.32 164.548L1362.02 161.655L1361 159.953L1361.34 161.655L1359.73 163.187L1358.37 163.016L1357.6 162.336L1356.58 161.059L1356.15 159.188Z"
            fill="#F7E481"
          />
          <path
            d="M1340.16 154.679L1336.33 141.235L1341.6 154.509L1342.29 164.464L1339.05 169.739L1338.63 169.739L1336.33 167.952L1335.48 164.464L1330.8 153.147L1329.1 147.276L1333.78 157.146L1337.78 162.336L1339.65 161.145L1340.16 154.679Z"
            fill="url(#paint26_linear_253_1140)"
          />
          <path
            d="M1333.94 168.462L1327.22 168.122L1334.88 167.101L1336.41 167.951L1338.54 169.653L1340.24 172.036L1341.6 177.566L1333.52 180.374L1321.35 181.565L1319.4 182.586L1321.61 180.799L1331.99 178.672L1336.41 174.588L1336.84 171.695L1333.94 168.462Z"
            fill="url(#paint27_linear_253_1140)"
          />
          <path
            d="M1351.47 179.523L1350.2 179.353L1347.82 179.523L1341.43 177.566L1345.18 188.542L1349.01 199.348L1353.01 206.24L1353.01 210.494L1356.41 209.133L1354.03 208.707L1353.6 205.304L1349.6 198.497L1346.71 189.734L1347.14 184.799L1350.62 184.118L1353.6 184.799L1356.92 189.734L1359.98 195.179L1356.49 184.458L1351.47 179.523Z"
            fill="url(#paint28_linear_253_1140)"
          />
          <path
            d="M1338.54 169.654L1342.11 164.548L1346.96 158.678L1351.73 153.062L1354.37 153.743L1355.73 152.722L1350.96 157.657L1353.6 157.997L1355.73 156.636L1356.49 157.657L1354.37 161.4L1354.71 161.826L1357.17 161.826L1356.32 165.399L1357.17 166.165L1357.94 165.144L1360.32 164.548L1359.56 166.931L1362.45 166.931L1361.6 169.228L1360.92 173.738L1350.2 179.353L1347.82 179.523L1341.43 177.652L1340.24 172.036L1338.54 169.654Z"
            fill="url(#paint29_linear_253_1140)"
          />
          <path
            d="M1361.26 168.802L1364.15 167.186L1361.77 169.057L1360.92 173.822L1350.11 179.438L1360.41 173.567L1361.26 168.802Z"
            fill="white"
          />
          <path
            d="M1360.58 159.273L1359.73 157.826L1357.77 157.826L1357.6 158.677L1357.68 159.698L1359.22 160.804L1360.75 160.634L1360.58 159.273Z"
            fill="#FFF8B3"
          />
          <path
            d="M649.394 236.174L645.507 236.634L644.931 236.634L644.586 236.289L641.994 231.826L643.031 229.839L643.434 227.449L644.442 225.549L646.256 227.017L646.601 227.91L647.379 231.826L652.014 231.106L655.095 231.423L656.852 232.056L652.504 235.483L649.394 236.174Z"
            fill="#F8F8F8"
          />
          <path
            d="M648.645 232.057L652.014 231.106L648.501 231.682L646.371 227.363L646.313 227.795L644.326 228.227L643.434 227.45L643.031 229.84L642.397 231.078L642.397 231.538L645.046 236.548L645.565 236.664L649.279 236.203L652.475 235.512L656.794 232.057L653.339 233.727L649.912 234.677L648.847 234.015L648.645 232.057Z"
            fill="url(#paint30_linear_253_1140)"
          />
          <path
            d="M645.593 227.652L641.072 233.094L641.072 234.648L642.973 236.952L644.931 236.635L648.732 234.648L648.991 233.094L650.689 231.74L648.991 231.971L650.43 230.531L649.739 230.531L649.739 229.466L649.97 228.947L649.307 228.947L649.307 227.911L648.415 228.487L647.58 227.104L646.486 227.911L645.593 227.652Z"
            fill="white"
          />
          <path
            d="M647.205 238.276L645.507 236.606L644.326 236.606L642.224 235.943L643.434 239.715L644.729 243.343L646.054 245.647L646.054 247.086L647.205 246.597L648.098 245.042L648.386 241.76L647.205 238.276Z"
            fill="#F8F8F8"
          />
          <path
            d="M639.921 232.402L640.957 232.978L641.735 234.044L642.196 235.915L639.431 236.894L635.343 237.297L633.5 238.161L633.5 236.405L634.968 234.303L637.358 232.748L639.921 232.402Z"
            fill="#F8F8F8"
          />
          <path
            d="M640.152 231.538L640.411 232.661L640.411 233.295L641.333 233.295L642.398 231.538L642.196 228.112L640.411 223.649L638.252 221L637.964 225.693L638.597 227.766L640.152 231.538Z"
            fill="#F8F8F8"
          />
          <path
            d="M647.234 229.264L646.515 230.473L646.63 230.588L647.436 230.588L647.177 231.826L647.436 232.085L647.724 231.74L648.53 231.538L649.106 230.588L648.329 229.264L647.234 229.264Z"
            fill="#FFF37B"
          />
          <path
            d="M647.119 229.724L647.522 229.264L647.206 229.264L646.515 230.473L646.63 230.617L647.446 230.617L647.177 231.826L647.436 232.085L647.724 231.74L648.53 231.538L649.106 230.559L648.76 229.984L648.876 230.559L648.329 231.078L647.868 231.02L647.609 230.79L647.263 230.358L647.119 229.724Z"
            fill="#F7E481"
          />
          <path
            d="M641.706 228.199L640.411 223.649L642.196 228.141L642.426 231.51L641.332 233.295L641.188 233.295L640.411 232.691L640.123 231.51L638.539 227.68L637.963 225.694L639.547 229.034L640.9 230.79L641.534 230.387L641.706 228.199Z"
            fill="url(#paint31_linear_253_1140)"
          />
          <path
            d="M639.604 232.863L637.329 232.748L639.921 232.402L640.439 232.69L641.159 233.266L641.735 234.072L642.196 235.944L639.46 236.894L635.343 237.297L634.68 237.643L635.429 237.038L638.942 236.318L640.439 234.936L640.583 233.957L639.604 232.863Z"
            fill="url(#paint32_linear_253_1140)"
          />
          <path
            d="M645.536 236.606L645.104 236.548L644.298 236.606L642.138 235.943L643.405 239.658L644.701 243.314L646.054 245.647L646.054 247.086L647.206 246.626L646.4 246.482L646.256 245.33L644.902 243.027L643.923 240.061L644.067 238.391L645.248 238.16L646.256 238.391L647.378 240.061L648.415 241.904L647.235 238.276L645.536 236.606Z"
            fill="url(#paint33_linear_253_1140)"
          />
          <path
            d="M641.159 233.266L642.368 231.538L644.01 229.552L645.622 227.651L646.515 227.882L646.975 227.536L645.363 229.206L646.255 229.321L646.975 228.861L647.234 229.206L646.515 230.473L646.63 230.617L647.465 230.617L647.177 231.826L647.465 232.085L647.724 231.74L648.53 231.538L648.271 232.345L649.25 232.345L648.962 233.122L648.732 234.648L645.104 236.548L644.298 236.606L642.138 235.973L641.735 234.072L641.159 233.266Z"
            fill="url(#paint34_linear_253_1140)"
          />
          <path
            d="M648.847 232.978L649.826 232.431L649.019 233.064L648.732 234.677L645.075 236.577L648.559 234.59L648.847 232.978Z"
            fill="white"
          />
          <path
            d="M648.617 229.753L648.329 229.264L647.667 229.264L647.609 229.552L647.638 229.897L648.156 230.271L648.674 230.214L648.617 229.753Z"
            fill="#FFF8B3"
          />
          <path
            d="M648.151 291.672L653.703 292.33L654.525 292.33L655.019 291.836L658.72 285.462L657.239 282.625L656.664 279.211L655.224 276.497L652.634 278.594L652.14 279.869L651.03 285.462L644.409 284.434L640.009 284.886L637.5 285.791L643.71 290.685L648.151 291.672Z"
            fill="#F8F8F8"
          />
          <path
            d="M649.219 285.791L644.407 284.434L649.424 285.256L652.468 279.088L652.55 279.705L655.387 280.322L656.662 279.211L657.238 282.625L658.143 284.393L658.143 285.051L654.359 292.206L653.619 292.371L648.314 291.713L643.749 290.726L637.581 285.791L642.516 288.176L647.409 289.533L648.931 288.587L649.219 285.791Z"
            fill="url(#paint35_linear_253_1140)"
          />
          <path
            d="M653.58 279.499L660.036 287.272L660.036 289.492L657.322 292.782L654.526 292.33L649.097 289.492L648.727 287.272L646.301 285.339L648.727 285.668L646.671 283.612L647.658 283.612L647.658 282.09L647.329 281.35L648.275 281.35L648.275 279.869L649.55 280.692L650.742 278.718L652.305 279.869L653.58 279.499Z"
            fill="white"
          />
          <path
            d="M651.276 294.675L653.702 292.29L655.388 292.29L658.39 291.344L656.663 296.731L654.813 301.913L652.921 305.202L652.921 307.259L651.276 306.56L650.001 304.339L649.59 299.651L651.276 294.675Z"
            fill="#F8F8F8"
          />
          <path
            d="M661.681 286.285L660.201 287.108L659.091 288.629L658.433 291.302L662.38 292.7L668.22 293.276L670.852 294.51L670.852 292.001L668.755 288.999L665.341 286.779L661.681 286.285Z"
            fill="#F8F8F8"
          />
          <path
            d="M661.35 285.051L660.98 286.655L660.98 287.56L659.664 287.56L658.143 285.051L658.43 280.158L660.98 273.783L664.064 270L664.476 276.703L663.571 279.664L661.35 285.051Z"
            fill="#F8F8F8"
          />
          <path
            d="M651.236 281.803L652.264 283.53L652.1 283.694L650.948 283.694L651.319 285.463L650.948 285.833L650.537 285.339L649.386 285.052L648.563 283.694L649.674 281.803L651.236 281.803Z"
            fill="#FFF37B"
          />
          <path
            d="M651.401 282.461L650.825 281.803L651.277 281.803L652.264 283.53L652.1 283.736L650.935 283.736L651.319 285.463L650.948 285.833L650.537 285.339L649.386 285.052L648.563 283.653L649.057 282.831L648.892 283.653L649.674 284.394L650.332 284.311L650.702 283.982L651.195 283.365L651.401 282.461Z"
            fill="#F7E481"
          />
          <path
            d="M659.132 280.281L660.982 273.783L658.433 280.199L658.104 285.01L659.666 287.56L659.872 287.56L660.982 286.696L661.393 285.01L663.655 279.541L664.478 276.703L662.216 281.473L660.283 283.982L659.378 283.406L659.132 280.281Z"
            fill="url(#paint36_linear_253_1140)"
          />
          <path
            d="M662.134 286.943L665.383 286.779L661.681 286.285L660.941 286.696L659.913 287.519L659.091 288.67L658.433 291.343L662.339 292.7L668.22 293.276L669.166 293.77L668.097 292.906L663.08 291.878L660.941 289.904L660.736 288.506L662.134 286.943Z"
            fill="url(#paint37_linear_253_1140)"
          />
          <path
            d="M653.66 292.29L654.277 292.207L655.429 292.29L658.513 291.344L656.703 296.649L654.853 301.871L652.92 305.202L652.92 307.259L651.275 306.601L652.427 306.395L652.632 304.75L654.565 301.46L655.963 297.224L655.758 294.839L654.071 294.51L652.632 294.839L651.028 297.224L649.548 299.856L651.234 294.675L653.66 292.29Z"
            fill="url(#paint38_linear_253_1140)"
          />
          <path
            d="M659.913 287.519L658.186 285.051L655.841 282.214L653.539 279.499L652.264 279.828L651.606 279.335L653.909 281.72L652.634 281.885L651.606 281.227L651.236 281.72L652.264 283.53L652.099 283.735L650.907 283.735L651.318 285.462L650.907 285.833L650.536 285.339L649.385 285.051L649.755 286.203L648.357 286.203L648.768 287.313L649.097 289.493L654.279 292.207L655.43 292.289L658.515 291.384L659.09 288.67L659.913 287.519Z"
            fill="url(#paint39_linear_253_1140)"
          />
          <path
            d="M648.932 287.108L647.534 286.326L648.685 287.231L649.097 289.534L654.319 292.248L649.343 289.41L648.932 287.108Z"
            fill="white"
          />
          <path
            d="M649.262 282.502L649.673 281.803L650.619 281.803L650.701 282.214L650.66 282.707L649.92 283.242L649.18 283.16L649.262 282.502Z"
            fill="#FFF8B3"
          />
          <path
            d="M1299.95 269.006L1314.66 270.748L1316.83 270.748L1318.14 269.441L1327.94 252.56L1324.02 245.046L1322.5 236.006L1318.69 228.818L1311.82 234.373L1310.52 237.749L1307.58 252.56L1290.04 249.838L1278.39 251.036L1271.75 253.432L1288.19 266.392L1299.95 269.006Z"
            fill="#F8F8F8"
          />
          <path
            d="M1302.79 253.433L1290.04 249.839L1303.33 252.017L1311.39 235.681L1311.61 237.314L1319.12 238.948L1322.5 236.007L1324.02 245.047L1326.42 249.73L1326.42 251.472L1316.4 270.422L1314.44 270.858L1300.39 269.116L1288.3 266.502L1271.96 253.433L1285.03 259.749L1297.99 263.343L1302.02 260.839L1302.79 253.433Z"
            fill="url(#paint40_linear_253_1140)"
          />
          <path
            d="M1314.33 236.769L1331.43 257.353L1331.43 263.234L1324.24 271.947L1316.84 270.749L1302.46 263.234L1301.48 257.353L1295.05 252.234L1301.48 253.106L1296.03 247.66L1298.65 247.66L1298.65 243.631L1297.78 241.67L1300.28 241.67L1300.28 237.75L1303.66 239.928L1306.82 234.7L1310.95 237.75L1314.33 236.769Z"
            fill="white"
          />
          <path
            d="M1308.23 276.956L1314.66 270.64L1319.12 270.64L1327.07 268.135L1322.5 282.402L1317.6 296.124L1312.59 304.837L1312.59 310.282L1308.23 308.431L1304.85 302.55L1303.76 290.134L1308.23 276.956Z"
            fill="#F8F8F8"
          />
          <path
            d="M1335.79 254.739L1331.86 256.917L1328.92 260.947L1327.18 268.026L1337.64 271.729L1353.1 273.254L1360.07 276.521L1360.07 269.878L1354.52 261.927L1345.48 256.046L1335.79 254.739Z"
            fill="#F8F8F8"
          />
          <path
            d="M1334.91 251.472L1333.93 255.719L1333.93 258.115L1330.45 258.115L1326.42 251.472L1327.18 238.512L1333.93 221.631L1342.1 211.611L1343.19 229.363L1340.8 237.205L1334.91 251.472Z"
            fill="#F8F8F8"
          />
          <path
            d="M1308.12 242.868L1310.84 247.442L1310.41 247.878L1307.36 247.878L1308.34 252.561L1307.36 253.541L1306.27 252.234L1303.22 251.472L1301.04 247.878L1303.98 242.868L1308.12 242.868Z"
            fill="#FFF37B"
          />
          <path
            d="M1308.56 244.611L1307.03 242.868L1308.23 242.868L1310.84 247.442L1310.41 247.987L1307.32 247.987L1308.34 252.561L1307.36 253.541L1306.27 252.234L1303.22 251.472L1301.04 247.769L1302.35 245.591L1301.91 247.769L1303.98 249.729L1305.73 249.512L1306.71 248.64L1308.01 247.007L1308.56 244.611Z"
            fill="#F7E481"
          />
          <path
            d="M1329.03 238.838L1333.93 221.631L1327.18 238.621L1326.31 251.363L1330.45 258.115L1330.99 258.115L1333.93 255.828L1335.02 251.363L1341.01 236.878L1343.19 229.363L1337.2 241.997L1332.08 248.64L1329.69 247.115L1329.03 238.838Z"
            fill="url(#paint41_linear_253_1140)"
          />
          <path
            d="M1336.98 256.482L1345.59 256.046L1335.79 254.739L1333.83 255.828L1331.1 258.007L1328.92 261.056L1327.18 268.135L1337.53 271.729L1353.1 273.254L1355.61 274.561L1352.78 272.274L1339.49 269.551L1333.83 264.323L1333.28 260.62L1336.98 256.482Z"
            fill="url(#paint42_linear_253_1140)"
          />
          <path
            d="M1314.55 270.64L1316.18 270.422L1319.23 270.64L1327.4 268.135L1322.6 282.184L1317.7 296.015L1312.59 304.837L1312.59 310.282L1308.23 308.54L1311.28 307.995L1311.82 303.639L1316.94 294.926L1320.64 283.709L1320.1 277.392L1315.63 276.521L1311.82 277.392L1307.58 283.709L1303.65 290.679L1308.12 276.956L1314.55 270.64Z"
            fill="url(#paint43_linear_253_1140)"
          />
          <path
            d="M1331.1 258.007L1326.53 251.472L1320.32 243.958L1314.22 236.77L1310.84 237.641L1309.1 236.334L1315.2 242.651L1311.82 243.086L1309.1 241.344L1308.12 242.651L1310.84 247.443L1310.41 247.987L1307.25 247.987L1308.34 252.561L1307.25 253.542L1306.27 252.235L1303.22 251.472L1304.2 254.522L1300.5 254.522L1301.59 257.462L1302.46 263.234L1316.18 270.422L1319.23 270.64L1327.4 268.244L1328.92 261.056L1331.1 258.007Z"
            fill="url(#paint44_linear_253_1140)"
          />
          <path
            d="M1302.02 256.917L1298.32 254.848L1301.37 257.244L1302.46 263.343L1316.29 270.53L1303.11 263.016L1302.02 256.917Z"
            fill="white"
          />
          <path
            d="M1302.89 244.72L1303.98 242.868L1306.49 242.868L1306.71 243.957L1306.6 245.264L1304.64 246.68L1302.68 246.462L1302.89 244.72Z"
            fill="#FFF8B3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_253_1140"
              x1="702.367"
              y1="224.226"
              x2="708.475"
              y2="249.174"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BDD677" />
              <stop offset="1" stop-color="#BDD677" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_253_1140"
              x1="593.088"
              y1="198.108"
              x2="623.234"
              y2="256.841"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DCF29E" />
              <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_253_1140"
              x1="628.431"
              y1="231.892"
              x2="638.177"
              y2="272.953"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9FFE8" />
              <stop offset="1" stop-color="#F9FFE8" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_253_1140"
              x1="639.998"
              y1="245.146"
              x2="623.105"
              y2="258.27"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A8BE69" />
              <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_253_1140"
              x1="686.774"
              y1="260.089"
              x2="696"
              y2="271.524"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9BB05F" />
              <stop offset="1" stop-color="#9BB05F" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_253_1140"
              x1="996.528"
              y1="184.464"
              x2="1000.14"
              y2="199.239"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BDD677" />
              <stop offset="1" stop-color="#BDD677" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_253_1140"
              x1="931.809"
              y1="168.995"
              x2="949.663"
              y2="203.779"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DCF29E" />
              <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_253_1140"
              x1="952.741"
              y1="189.004"
              x2="958.512"
              y2="213.322"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9FFE8" />
              <stop offset="1" stop-color="#F9FFE8" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_253_1140"
              x1="959.59"
              y1="196.853"
              x2="949.586"
              y2="204.626"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A8BE69" />
              <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_253_1140"
              x1="950.892"
              y1="222.214"
              x2="960.879"
              y2="241.695"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DCF29E" />
              <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_253_1140"
              x1="962.596"
              y1="233.396"
              x2="965.823"
              y2="247.031"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9FFE8" />
              <stop offset="1" stop-color="#F9FFE8" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_253_1140"
              x1="966.479"
              y1="237.855"
              x2="960.828"
              y2="242.278"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#97AB5D" />
              <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_253_1140"
              x1="987.293"
              y1="205.703"
              x2="992.757"
              y2="212.475"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9BB05F" />
              <stop offset="1" stop-color="#9BB05F" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_253_1140"
              x1="980.342"
              y1="224.452"
              x2="981.492"
              y2="229.118"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BDD677" />
              <stop offset="1" stop-color="#BDD677" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_253_1140"
              x1="977.419"
              y1="231.143"
              x2="979.138"
              y2="233.253"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9BB05F" />
              <stop offset="1" stop-color="#9BB05F" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_253_1140"
              x1="1431.61"
              y1="21.8548"
              x2="1446.08"
              y2="80.9561"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BDD677" />
              <stop offset="1" stop-color="#BDD677" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_253_1140"
              x1="1172.74"
              y1="-40.0161"
              x2="1244.15"
              y2="99.1181"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DCF29E" />
              <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_253_1140"
              x1="1256.46"
              y1="40.0165"
              x2="1279.55"
              y2="137.287"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9FFE8" />
              <stop offset="1" stop-color="#F9FFE8" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint18_linear_253_1140"
              x1="1283.86"
              y1="71.4142"
              x2="1243.84"
              y2="102.504"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A8BE69" />
              <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint19_linear_253_1140"
              x1="1249.07"
              y1="172.856"
              x2="1289.02"
              y2="250.779"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DCF29E" />
              <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint20_linear_253_1140"
              x1="1295.89"
              y1="217.587"
              x2="1308.79"
              y2="272.125"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9FFE8" />
              <stop offset="1" stop-color="#F9FFE8" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint21_linear_253_1140"
              x1="1311.41"
              y1="235.417"
              x2="1288.81"
              y2="253.11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#97AB5D" />
              <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint22_linear_253_1140"
              x1="1394.67"
              y1="106.813"
              x2="1416.53"
              y2="133.901"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9BB05F" />
              <stop offset="1" stop-color="#9BB05F" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint23_linear_253_1140"
              x1="1366.87"
              y1="181.81"
              x2="1371.47"
              y2="200.473"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BDD677" />
              <stop offset="1" stop-color="#BDD677" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint24_linear_253_1140"
              x1="1355.18"
              y1="208.572"
              x2="1362.05"
              y2="217.011"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9BB05F" />
              <stop offset="1" stop-color="#9BB05F" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint25_linear_253_1140"
              x1="1360.66"
              y1="182.161"
              x2="1379.89"
              y2="168.547"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#ECEBE9" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint26_linear_253_1140"
              x1="1335.73"
              y1="192.967"
              x2="1337.95"
              y2="142.341"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#D9D3C0" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint27_linear_253_1140"
              x1="1340.75"
              y1="178.332"
              x2="1325.61"
              y2="171.27"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#F2F0EC" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint28_linear_253_1140"
              x1="1347.56"
              y1="177.651"
              x2="1354.03"
              y2="201.05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#F1F0ED" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint29_linear_253_1140"
              x1="1344.33"
              y1="176.801"
              x2="1365.68"
              y2="163.187"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DBDBDB" />
              <stop offset="1" stop-color="#F2F1EF" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint30_linear_253_1140"
              x1="648.645"
              y1="237.499"
              x2="655.153"
              y2="232.892"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#ECEBE9" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint31_linear_253_1140"
              x1="640.209"
              y1="241.156"
              x2="640.958"
              y2="224.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#D9D3C0" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint32_linear_253_1140"
              x1="641.908"
              y1="236.203"
              x2="636.782"
              y2="233.813"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#F2F0EC" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint33_linear_253_1140"
              x1="644.211"
              y1="235.972"
              x2="646.399"
              y2="243.89"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#F1F0ED" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint34_linear_253_1140"
              x1="643.117"
              y1="235.685"
              x2="650.344"
              y2="231.078"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DBDBDB" />
              <stop offset="1" stop-color="#F2F1EF" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint35_linear_253_1140"
              x1="649.219"
              y1="293.563"
              x2="639.925"
              y2="286.984"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#ECEBE9" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint36_linear_253_1140"
              x1="661.27"
              y1="298.786"
              x2="660.201"
              y2="274.318"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#D9D3C0" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint37_linear_253_1140"
              x1="658.844"
              y1="291.713"
              x2="666.164"
              y2="288.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#F2F0EC" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint38_linear_253_1140"
              x1="655.552"
              y1="291.385"
              x2="652.427"
              y2="302.694"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#F1F0ED" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint39_linear_253_1140"
              x1="657.116"
              y1="290.973"
              x2="646.794"
              y2="284.393"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DBDBDB" />
              <stop offset="1" stop-color="#F2F1EF" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint40_linear_253_1140"
              x1="1302.79"
              y1="274.017"
              x2="1278.17"
              y2="256.591"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#ECEBE9" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint41_linear_253_1140"
              x1="1334.7"
              y1="287.847"
              x2="1331.86"
              y2="223.047"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#D9D3C0" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint42_linear_253_1140"
              x1="1328.27"
              y1="269.115"
              x2="1347.66"
              y2="260.076"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#F2F0EC" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint43_linear_253_1140"
              x1="1319.56"
              y1="268.244"
              x2="1311.28"
              y2="298.194"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E1DD" />
              <stop offset="1" stop-color="#F1F0ED" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint44_linear_253_1140"
              x1="1323.7"
              y1="267.155"
              x2="1296.36"
              y2="249.73"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DBDBDB" />
              <stop offset="1" stop-color="#F2F1EF" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <div class="motionDesignContainer" id="motionDesignContainer">
      <div class="designSubContainer">
        <div class="">
          <div class="designTitleContainer motionTitleContainer">
            <h2 class="designTitle motionTitle">{{ $t("navbar_motion") }}</h2>
          </div>
          <div class="designCarouselContainer" id="designCarouselContainer">
            <div id="carousel2" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ul class="carousel-indicators carousel-indicators-motion">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
              </ul>

              <!-- The slideshow -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="carouselFlex carouselFlexMotion">
                    <div class="designFlexLeft">
                      <a href="https://youtu.be/OksYdPDb_MI" target="_blank">
                        <img
                          :src="require('../assets/img/thumbnail.png')"
                          alt="synerg pic"
                          class="carouselImg"
                        />
                      </a>
                    </div>
                    <div class="designFlexRight">
                      <div class="projectDesignTitleContainer projectMotionTitleContainer">
                        <h3 class="projectDesignTitle">
                          {{ $t("blossom_title") }}
                        </h3>
                      </div>
                      <p class="projectDesignText projectMotionText">
                        {{ $t("blossom_text") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carouselFlex carouselFlexMotion">
                    <div class="designFlexLeft">
                      <a href="https://youtu.be/hR0_8UJ2peQ" target="_blank">
                        <img
                          :src="require('../assets/img/thumbnail.png')"
                          alt="clothing pic"
                          class="carouselImg"
                        />
                      </a>
                    </div>
                    <div class="designFlexRight">
                      <div class="projectDesignTitleContainer projectMotionTitleContainer">
                        <h3 class="projectDesignTitle">
                          {{ $t("catapulz_title") }}
                        </h3>
                      </div>
                      <p class="projectDesignText projectMotionText">
                        {{ $t("catapulz_text") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carouselFlex carouselFlexMotion">
                    <div class="designFlexLeft">
                      <a href="https://youtu.be/bSfSX3n8jkU" target="_blank">
                        <img
                          :src="require('../assets/img/thumbnail.png')"
                          alt="netflix poster pic"
                          class="carouselImg"
                        />
                      </a>
                    </div>                  
                    <div class="designFlexRight">
                      <div class="projectDesignTitleContainer projectMotionTitleContainer">
                        <h3 class="projectDesignTitle ">
                          {{ $t("cajoo_title") }}
                        </h3>
                      </div>
                      <p class="projectDesignText projectMotionText">
                        {{ $t("cajoo_text") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carouselFlex carouselFlexMotion">
                    <div class="designFlexLeft">
                      <a href="https://youtu.be/1ZvTsY2JIKs" target="_blank">
                        <img
                          :src="require('../assets/img/thumbnail.png')"
                          alt="instagram feed pic"
                          class="carouselImg"
                        />
                      </a>
                    </div>
                    <div class="designFlexRight">
                      <div class="projectDesignTitleContainer projectMotionTitleContainer">
                        <h3 class="projectDesignTitle ">
                          {{ $t("citwell_title") }}
                        </h3>
                      </div>
                      <p class="projectDesignText projectMotionText">
                        {{ $t("citwell_text1") }} <br />
                        {{ $t("citwell_text2") }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-next motionControlNext"
                href="#carousel2"
                role="button"
                data-slide="next"
              >
                <svg
                  class="whiteArrow carousel-control-next-icon"
                  aria-hidden="true"
                  width="252"
                  height="79"
                  viewBox="0 0 252 100"
                  fill="none"
                >
                  <path
                    id="whietArrowPath2"
                    d="M251.107 39.5L191.857 73.708L191.857 5.29199L251.107 39.5Z"
                    fill="white"
                  />
                  <path
                    id="whietArrowPath1"
                    d="M191.857 39.5L-1.63913e-05 39.5"
                    stroke="white"
                    stroke-width="3"
                  />
                </svg>
              </a>
              <!-- Left and right controls -->
            </div>
          </div>
        </div>

      </div>
      <svg
        width="1441"
        height="639"
        viewBox="0 0 1441 639"
        id="motionDivider"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1440.5 353.5V205L1201 144.5L281.5 313L0.5 425.5V447H1440.5V353.5Z"
          fill="#E3C7B2"
        />
        <path
          d="M0.5 478V407.5L71.4999 430.999H335.5L918 315L1375.5 240L1440.5 254V514.5V639H1048.5L465.5 523L0.5 478Z"
          fill="#EDD4C1"
        />
        <path
          d="M84.3095 124.154L81.4631 128L70.4623 136.463L60.3847 154.925L59 174.85L65.6928 193.236L81.4631 206.929L84.3095 210.468L91.3869 213.468L97.9258 210.468L100.311 206.929L116.542 193.236L123.389 174.85L121.466 154.925L111.465 136.463L100.311 128L97.9258 124.154L91.3869 121L84.3095 124.154Z"
          fill="#FED03D"
        />
        <path
          d="M111.465 136.463L100.234 128.001L97.9257 124.231L98.8488 128.693L105.926 143.848L107.157 161.311L99.695 187.39L91.3098 197.237L80.5399 197.929L65.5388 193.39L81.463 206.93L84.2324 210.468L91.3098 213.545L97.9257 210.468L100.234 206.93L116.389 193.39L123.389 174.62L121.466 155.003L111.465 136.463Z"
          fill="url(#paint0_linear_253_1141)"
        />
        <path
          d="M84.2325 124.231L91.4638 121L84.2325 124.846L82.1555 128.462L71.2316 136.463L61.3079 155.002L60.3078 174.773L66.7698 193.313L70.2316 197.159L65.7697 193.313L59 174.773L60.3078 155.002L70.4623 136.463L81.4631 128L84.2325 124.231Z"
          fill="white"
        />
        <path
          d="M84.6172 128.386L81.1554 129.078L71.2316 136.386L61.0002 154.849L59.6924 174.543L63.2311 184.697L66.6929 183.082L68.9238 174.543L73.8472 160.542L84.6172 154.849L92.4639 144.541L91.5408 134.078L84.6172 128.386Z"
          fill="url(#paint1_linear_253_1141)"
        />
        <path
          d="M139.726 130.715L135.376 172.87V189.933L177.532 169.19L257.828 118.67L335.448 44.7308L349.5 10.9395H271.546L199.614 37.0357L156.789 84.879L139.726 130.715Z"
          fill="#A9C069"
        />
        <path
          opacity="0.4"
          d="M335.114 44.7306L347.827 11.943L272.215 11.6084L199.279 38.7084L157.793 85.2133L141.064 129.042V147.778L147.756 153.465L177.867 126.365L231.398 77.5183L239.762 59.4516L283.925 41.7195L335.114 44.7306Z"
          fill="url(#paint2_linear_253_1141)"
        />
        <path
          d="M117.979 99.5996L120.321 141.421L114.299 143.763L79.1691 121.346L21.6235 84.544L0.5 66.5V1L58.7605 14.6193L98.5741 49.4144L117.979 99.5996Z"
          fill="#B7CE77"
        />
        <path
          opacity="0.3"
          d="M26.3075 42.7233L8.90993 27.3332L0.5 25.8663V1.73047L58.426 15.6233L97.2359 49.7492L117.979 99.5998L116.306 110.641L97.2359 86.2171L26.3075 42.7233Z"
          fill="url(#paint3_linear_253_1141)"
        />
        <path
          d="M96.5667 50.4185L57.4222 15.958L0.5 2.48254V0.99707L58.7605 14.6197L98.5741 49.4148L117.979 99.9345L96.5667 50.4185Z"
          fill="url(#paint4_linear_253_1141)"
        />
        <path
          opacity="0.7"
          d="M21.289 84.21L114.968 144.432L95.2285 86.5519L44.7087 54.4334L15.9359 44.731L1.88403 53.0952V67.4816L21.289 84.21Z"
          fill="url(#paint5_linear_253_1141)"
        />
        <path
          d="M130.38 265.772L131.696 289.319L128.31 290.638L108.558 278.016L76.2023 257.294L41.4009 227.718L31.9951 206.996H50.4304L97.0831 217.922L119.469 237.514L130.38 265.772Z"
          fill="#ABC16E"
        />
        <path
          opacity="0.3"
          d="M53.1031 229.952L58.541 242.125L42.2274 228.079L32.6643 207.666H50.853L96.981 218.715L118.732 237.818L130.358 265.722L129.421 271.903L118.732 258.231L78.9798 233.885L69.2292 225.27L53.1031 222.461V229.952Z"
          fill="url(#paint6_linear_253_1141)"
        />
        <path
          d="M41.9631 227.437L56.6329 240.751L41.3988 227.812L31.9951 207.184L50.2383 206.996L97.0689 218.06L119.45 237.563L130.358 265.88L118.321 238.126L96.3166 218.81L50.2383 207.934H33.1236L41.9631 227.437Z"
          fill="url(#paint7_linear_253_1141)"
        />
        <path
          opacity="0.7"
          d="M75.8056 257.357L129.02 291.308L117.807 258.677L89.1092 240.57L72.7648 235.1L64.7827 239.815V247.926L75.8056 257.357Z"
          fill="url(#paint8_linear_253_1141)"
        />
        <path
          opacity="0.5"
          d="M134.373 177.554V190.268L177.532 169.19L258.163 118.001L328.088 51.7568L292.958 60.7902L246.453 91.2358L215.338 93.5778L189.577 116.328L134.373 177.554Z"
          fill="url(#paint9_linear_253_1141)"
        />
        <path
          d="M137.084 227.88L135.711 241.117V246.475L149.017 239.962L174.36 224.098L198.859 200.879L203.294 190.268H178.69L155.986 198.463L142.469 213.486L137.084 227.88Z"
          fill="#A9C069"
        />
        <path
          opacity="0.4"
          d="M198.634 200.736L202.625 190.374L178.889 190.268L155.993 198.833L142.97 213.53L137.719 227.381V233.303L139.819 235.1L149.271 226.536L166.076 211.098L168.701 205.388L182.565 199.784L198.634 200.736Z"
          fill="url(#paint10_linear_253_1141)"
        />
        <path
          opacity="0.5"
          d="M135.711 242.483V246.475L149.129 239.857L174.195 223.783L195.933 202.981L185.012 205.818L170.555 215.378L160.882 216.114L152.873 223.258L135.711 242.483Z"
          fill="url(#paint11_linear_253_1141)"
        />
        <path
          d="M152.105 365.581L139.697 309.21L138.104 247.959V244.468L152.774 224.059L161.138 215.695L150.767 224.059L138.104 239.784V230.416L136.511 186.708L183.554 125.362L233.405 75.1763L180.209 122.35L133.42 172.201L97.5705 85.8825L23.9656 40.7158L94.5594 88.559L129.078 186.708V284.281L117.979 258.854L89.5409 240.787L80.8421 237.776L89.5409 242.795L116.641 260.192L129.078 291.307V346.903L117.31 392.012L137.05 373.611L152.105 365.581Z"
          fill="#94AA54"
        />
        <path
          d="M97.5704 85.8825L123.332 148.112L96.5667 86.5516L24.3 40.7158L97.5704 85.8825Z"
          fill="#DFF996"
        />
        <path
          d="M137.636 244.322L135.54 247.155L127.44 253.385L120.02 266.98L119 281.65L123.928 295.188L135.54 305.27L137.636 307.876L142.847 310.085L147.661 307.876L149.417 305.27L161.369 295.188L166.41 281.65L164.994 266.98L157.631 253.385L149.417 247.155L147.661 244.322L142.847 242L137.636 244.322Z"
          fill="#FED03D"
        />
        <path
          d="M157.631 253.386L149.361 247.155L147.661 244.379L148.341 247.665L153.552 258.823L154.459 271.681L148.964 290.883L142.79 298.134L134.86 298.643L123.815 295.301L135.54 305.271L137.579 307.876L142.79 310.142L147.661 307.876L149.361 305.271L161.256 295.301L166.41 281.481L164.994 267.037L157.631 253.386Z"
          fill="url(#paint12_linear_253_1141)"
        />
        <path
          d="M137.579 244.379L142.903 242L137.579 244.832L136.05 247.494L128.006 253.385L120.699 267.036L119.963 281.593L124.721 295.244L127.27 298.077L123.985 295.244L119 281.593L119.963 267.036L127.44 253.385L135.54 247.155L137.579 244.379Z"
          fill="white"
        />
        <path
          d="M137.862 247.438L135.313 247.948L128.006 253.329L120.472 266.923L119.51 281.424L122.115 288.901L124.664 287.711L126.307 281.424L129.932 271.115L137.862 266.923L143.639 259.333L142.96 251.63L137.862 247.438Z"
          fill="url(#paint13_linear_253_1141)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_253_1141"
            x1="128.928"
            y1="187.005"
            x2="89.7713"
            y2="162.542"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FEBC3D" />
            <stop offset="1" stop-color="#FE9A3D" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_253_1141"
            x1="61.154"
            y1="138.079"
            x2="90.156"
            y2="164.465"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFE79C" />
            <stop offset="1" stop-color="#FFDD71" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_253_1141"
            x1="238.758"
            y1="18.6343"
            x2="254.483"
            y2="82.8714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#BDD677" />
            <stop offset="1" stop-color="#BDD677" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_253_1141"
            x1="-42.6135"
            y1="-48.6137"
            x2="35.0062"
            y2="102.611"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DCF29E" />
            <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_253_1141"
            x1="48.3889"
            y1="38.3737"
            x2="73.4815"
            y2="144.097"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F9FFE8" />
            <stop offset="1" stop-color="#F9FFE8" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_253_1141"
            x1="78.1655"
            y1="72.5001"
            x2="34.6717"
            y2="106.291"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A8BE69" />
            <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_253_1141"
            x1="40.3523"
            y1="182.757"
            x2="83.7699"
            y2="267.452"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DCF29E" />
            <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_253_1141"
            x1="91.2386"
            y1="231.375"
            x2="105.267"
            y2="290.652"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F9FFE8" />
            <stop offset="1" stop-color="#F9FFE8" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_253_1141"
            x1="108.114"
            y1="250.755"
            x2="83.5489"
            y2="269.986"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#97AB5D" />
            <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_253_1141"
            x1="198.61"
            y1="110.975"
            x2="222.364"
            y2="140.417"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9BB05F" />
            <stop offset="1" stop-color="#9BB05F" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_253_1141"
            x1="168.386"
            y1="192.489"
            x2="173.385"
            y2="212.774"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#BDD677" />
            <stop offset="1" stop-color="#BDD677" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_253_1141"
            x1="155.681"
            y1="221.577"
            x2="163.156"
            y2="230.749"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9BB05F" />
            <stop offset="1" stop-color="#9BB05F" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_253_1141"
            x1="170.489"
            y1="290.6"
            x2="141.657"
            y2="272.588"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FEBC3D" />
            <stop offset="1" stop-color="#FE9A3D" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_253_1141"
            x1="120.586"
            y1="254.575"
            x2="141.94"
            y2="274.004"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFE79C" />
            <stop offset="1" stop-color="#FFDD71" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="contactContainer" id="contactContainer">
      <div id="contactContent">
        <div class="contactTitleContainer">
          <h3 class="contactTitle">{{ $t("contact_me") }}</h3>
        </div>
        <svg
          width="230"
          height="192"
          viewBox="0 0 230 192"
          id="citron1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6611 133.535L0 102.945L153.994 132.64L103.217 160.883L65.2362 162.954L37.1146 152.357L17.6611 133.535Z"
            fill="url(#paint0_linear_2_298)"
          />
          <path
            d="M175.892 1.39391L0 102.945L31.9354 128.514L83.0829 144.601L122.101 142.467L152.786 133.337L186.393 106.958L199.53 79.5166L199.363 42.0463L185.743 12.8796L175.892 1.39391Z"
            fill="#FED03D"
          />
          <path
            d="M28.0138 115.215L8.05005 98.2976L168.647 5.57677L176.361 16.1496L187.748 35.8721L191.782 61.4497L186.123 85.1104L166.297 112.12L134.097 130.711L95.5604 137.397L53.5503 127.841L28.0138 115.215Z"
            fill="#FFF7E2"
          />
          <path
            d="M163.13 87.1155L104.484 57.1116L100.55 54.0161L104.173 51.9247L164.03 43.1263L175.503 43.4787L183.371 49.6696L184.18 63.1556L178.566 84.1067L170.919 88.522L163.13 87.1155Z"
            fill="url(#paint1_linear_2_298)"
          />
          <path
            d="M107.058 117.341L88.1975 63.2942L84.6828 63.7134L50.496 115.114L54.2141 121.554L64.4345 125.314L98.4691 130.35L106.922 125.47L107.058 117.341Z"
            fill="url(#paint2_linear_2_298)"
          />
          <path
            d="M44.5787 106.724L79.695 56.9333L14.0876 94.8118L25.6734 107.443L35.3212 112.069L44.5787 106.724Z"
            fill="url(#paint3_linear_2_298)"
          />
          <path
            d="M157.79 91.8083L97.874 61.4641L95.8615 62.626L110.506 101.934L118.718 120.806L127.499 124.86L137.006 123.665L163.616 105.618L163.52 97.0863L157.79 91.8083Z"
            fill="url(#paint4_linear_2_298)"
          />
          <path
            d="M167.108 35.4452L98.2097 46.2439L164.22 8.13307L171.888 21.4155L173.191 29.2498L167.108 35.4452Z"
            fill="url(#paint5_linear_2_298)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_298"
              x1="-20.0338"
              y1="109.145"
              x2="114.367"
              y2="166.252"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FED03D" />
              <stop offset="1" stop-color="#FEB13D" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2_298"
              x1="163.715"
              y1="74.3877"
              x2="137.089"
              y2="-11.0155"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FCE450" />
              <stop offset="1" stop-color="#FFCF88" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2_298"
              x1="91.7731"
              y1="116.054"
              x2="70.2013"
              y2="31.1273"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FCE450" />
              <stop offset="1" stop-color="#FFCF88" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2_298"
              x1="63.2793"
              y1="88.7409"
              x2="48.0716"
              y2="56.2322"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FCE450" />
              <stop offset="1" stop-color="#FFCF88" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_2_298"
              x1="142.018"
              y1="100.126"
              x2="125.719"
              y2="4.46643"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FCE450" />
              <stop offset="1" stop-color="#FFCF88" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_2_298"
              x1="147.468"
              y1="39.7285"
              x2="132.468"
              y2="7.8363"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FCE450" />
              <stop offset="1" stop-color="#FFCF88" />
            </linearGradient>
          </defs>
        </svg>

        <div class="contactPolygon">
          <p class="contactme">{{ $t("contact_me_text") }}</p>
          <a class="mailAdress" href="mailto:florianeryan@gmail.com"
            >florianeryan [at] gmail.com</a
          >
          <div id="iconeContainer">
            <a
              href="https://www.linkedin.com/in/floriane-ryan-157a231b8/"
              target="_blank"
              class="social"
            >
              <img
                :src="require('../assets/img/linkedin.png')"
                alt="linkedin"
                class="icons"
              />
            </a>
            <a
              href="https://www.instagram.com/floww_designs/?hl=fr"
              target="_blank"
              class="social"
            >
              <img
                :src="require('../assets/img/insta.png')"
                alt="instagram"
                class="icons"
              />
            </a>
          </div>
        </div>
        <div class="cvDownloadParent">
          <p>
            {{ $t("download") }}
          </p>
          <p>
            {{ $t("resume") }}
          </p>
          <a href="#">{{ $t("here") }}</a>
        </div>
      </div>

      <svg
        width="448"
        height="825"
        viewBox="0 0 448 825"
        id="citron2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.0373 48.1496L107.813 8.37402L427.064 316.111L384.148 357.98L307.737 414.504L191.551 433.345L107.813 414.504L76.4111 422.877L32.4486 414.504L14.6543 379.962L21.9814 331.812L0.000152588 224L21.9814 128.747L68.0373 48.1496Z"
          fill="#FED03D"
        />
        <path
          d="M68.0373 48.1496L107.813 8.37402L427.064 316.111L384.148 357.98L307.737 414.504L191.551 433.345L107.813 414.504L76.4111 422.877L32.4486 414.504L14.6543 379.962L21.9814 331.812L0.000152588 224L21.9814 128.747L68.0373 48.1496Z"
          fill="url(#paint0_linear_351_35)"
        />
        <path
          d="M138.169 0L106.767 9.42053L77.4592 38.7288L71.1788 78.5044L88.9731 138.168L142.356 215.625L255.403 305.644L342.281 332.859H401.944L427.065 316.111L448 260.635L434.393 208.298L382.056 126.654L319.253 68.0372L220.861 9.42053L138.169 0Z"
          fill="#FED03D"
        />
        <path
          d="M147.918 15.7007L119.307 24.2325L92.6039 50.7759L86.8818 86.799L103.094 140.834L151.732 210.984L254.73 292.51L333.886 317.158H388.246L411.134 301.99L430.208 251.747L417.81 204.348L370.126 130.406L312.905 77.3192L223.258 24.2325L147.918 15.7007Z"
          fill="#FFF7E2"
        />
        <path
          d="M148.639 38.7283L236.564 146.541L114.097 82.6907L106.77 63.8497L121.424 38.7283L138.172 33.4946L148.639 38.7283Z"
          fill="url(#paint1_linear_351_35)"
        />
        <path
          d="M124.559 101.532L237.606 161.195L152.821 178.989L138.167 170.616L109.905 122.466L106.765 101.532H124.559Z"
          fill="url(#paint2_linear_351_35)"
        />
        <path
          d="M252.262 259.588V181.083L169.571 193.644V208.298L200.972 240.747L243.888 267.962L252.262 259.588Z"
          fill="url(#paint3_linear_351_35)"
        />
        <path
          d="M354.844 292.036L271.106 187.363L267.966 272.148L282.62 292.036L336.003 307.737L354.844 304.597V292.036Z"
          fill="url(#paint4_linear_351_35)"
        />
        <path
          d="M386.242 237.607L281.57 185.271L357.981 283.663L381.009 301.457L397.756 294.13L412.41 273.195V256.448L386.242 237.607Z"
          fill="url(#paint5_linear_351_35)"
        />
        <path
          d="M365.308 154.916L280.523 168.523L397.756 235.514L412.41 232.374L408.223 209.346L389.382 172.71L365.308 154.916Z"
          fill="url(#paint6_linear_351_35)"
        />
        <path
          d="M252.696 62.4306L254.246 148.286L167.641 44.6965L168.149 29.7182L191.554 29.7806L230.937 41.8693L252.696 62.4306Z"
          fill="url(#paint7_linear_351_35)"
        />
        <path
          d="M266.919 70.1303V157.008L351.704 140.261L354.844 127.7L316.115 90.018L278.433 65.9434L266.919 70.1303Z"
          fill="url(#paint8_linear_351_35)"
        />
        <g style="mix-blend-mode: multiply">
          <path
            d="M336 825H427.942V315.456L440 278.357L418.899 267L406.087 297.285L384.232 313.185L352.58 317.727L342.783 332.87L336 825Z"
            fill="url(#paint9_linear_351_35)"
          />
        </g>
        <path
          id="liquid1"
          opacity="0.8"
          d="M406 325.037L416 322V501.203L406 505V325.037Z"
          fill="url(#paint10_linear_351_35)"
        />
        <path
          id="liquid2"
          opacity="0.8"
          d="M362 494.191L369 492V621.261L362 624V494.191Z"
          fill="url(#paint11_linear_351_35)"
        />
        <path
          id="liquid3"
          opacity="0.5"
          d="M398 650.539L406 648V797.826L398 801V650.539Z"
          fill="url(#paint12_linear_351_35)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_351_35"
            x1="173.757"
            y1="395.663"
            x2="13.6075"
            y2="37.6824"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FEB13D" />
            <stop offset="1" stop-color="#FEBB3D" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_351_35"
            x1="158.375"
            y1="119.017"
            x2="124.582"
            y2="-32.7693"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FCE450" />
            <stop offset="1" stop-color="#FFCF88" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_351_35"
            x1="158.786"
            y1="160.13"
            x2="142.638"
            y2="53.4174"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FCE450" />
            <stop offset="1" stop-color="#FFCF88" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_351_35"
            x1="202.448"
            y1="246.809"
            x2="171.78"
            y2="132.613"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FCE450" />
            <stop offset="1" stop-color="#FFCF88" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_351_35"
            x1="302.507"
            y1="278.428"
            x2="249.124"
            y2="127.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FCE450" />
            <stop offset="1" stop-color="#FFCF88" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_351_35"
            x1="333.591"
            y1="273.168"
            x2="298.246"
            y2="117.456"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FCE450" />
            <stop offset="1" stop-color="#FFCF88" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_351_35"
            x1="332.96"
            y1="215.89"
            x2="315.64"
            y2="105.014"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FCE450" />
            <stop offset="1" stop-color="#FFCF88" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_351_35"
            x1="198.379"
            y1="105.019"
            x2="310.572"
            y2="102.525"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FCE450" />
            <stop offset="1" stop-color="#FFCF88" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_351_35"
            x1="301.877"
            y1="134.836"
            x2="270.127"
            y2="14.9092"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FCE450" />
            <stop offset="1" stop-color="#FFCF88" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_351_35"
            x1="348.058"
            y1="507.008"
            x2="348.058"
            y2="825"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FAD250" />
            <stop offset="1" stop-color="#FFC164" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_351_35"
            x1="416"
            y1="221.768"
            x2="416"
            y2="537.651"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_351_35"
            x1="369"
            y1="419.701"
            x2="369"
            y2="647.552"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_351_35"
            x1="406"
            y1="564.199"
            x2="406"
            y2="828.299"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        width="1451"
        height="329"
        viewBox="0 0 1451 329"
        id="contactDivider"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1440.5 136V249.5L1175.5 200L197.5 220L0.5 152V0L204.5 53.5L1153.5 151.5L1440.5 136Z"
          fill="#EDD4C1"
        />
        <path
          d="M197.5 220L0.499878 152V317H1440.5V249.5L1175.5 200L197.5 220Z"
          fill="#E3C7B2"
        />
        <g filter="url(#filter0_f_288_9)">
          <path
            d="M1353.92 200.238L1439.15 99.2845L1440.5 98.666L1440.5 291.722L1418.52 317L1279.67 317L1294.21 294.097L1353.92 200.238Z"
            fill="#ABC16E"
          />
          <g opacity="0.3">
            <path
              d="M1432.74 133.256L1397.73 149.019L1438.13 101.73L1440.5 100.61L1440.5 133.256L1432.74 133.256Z"
              fill="url(#paint0_linear_288_9)"
            />
            <path
              d="M1421.43 208.267L1440.5 186.514L1440.5 288.635L1415.78 317L1355.35 317L1421.43 208.267Z"
              fill="url(#paint1_linear_288_9)"
            />
          </g>
          <path
            opacity="0.7"
            d="M1378.27 166.052L1280 320.786L1374.44 288.182L1426.85 204.736L1442.68 157.21L1429.04 134L1405.56 134L1378.27 166.052Z"
            fill="url(#paint2_linear_288_9)"
          />
        </g>
        <g filter="url(#filter1_f_288_9)">
          <path
            d="M1209.93 243.563L1244.81 273.89L1261.57 317L1197 316.984L1177.39 304.508L1123.16 258.726L1108.5 226.65L1137.23 226.65L1209.93 243.563Z"
            fill="#ABC16E"
          />
          <path
            opacity="0.3"
            d="M1141.41 262.166L1149.87 280.976L1124.47 259.272L1109.58 227.729L1137.9 227.729L1209.73 244.803L1243.6 274.32L1261.52 317H1252.38L1243.6 305.864L1181.7 268.243L1166.52 254.931L1141.41 250.59V262.166Z"
            fill="url(#paint3_linear_288_9)"
          />
          <path
            opacity="0.7"
            d="M1159.21 289.751L1176.43 304.414L1196.25 317L1245.67 317L1242.03 306.467L1197.21 278.313L1171.68 269.809L1159.21 277.14V289.751Z"
            fill="url(#paint4_linear_288_9)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_288_9"
            x="1271.67"
            y="90.666"
            width="179.011"
            height="238.12"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4"
              result="effect1_foregroundBlur_288_9"
            />
          </filter>
          <filter
            id="filter1_f_288_9"
            x="1100.5"
            y="218.65"
            width="169.068"
            height="106.35"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4"
              result="effect1_foregroundBlur_288_9"
            />
          </filter>
          <linearGradient
            id="paint0_linear_288_9"
            x1="1568.5"
            y1="96.2936"
            x2="1324.09"
            y2="220.621"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DCF29E" />
            <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_288_9"
            x1="1568.5"
            y1="96.2936"
            x2="1324.09"
            y2="220.621"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DCF29E" />
            <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_288_9"
            x1="1397.37"
            y1="259.998"
            x2="1341.39"
            y2="188.819"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#97AB5D" />
            <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_288_9"
            x1="1121.55"
            y1="189.24"
            x2="1188.34"
            y2="320.53"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DCF29E" />
            <stop offset="1" stop-color="#C7DD87" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_288_9"
            x1="1226.89"
            y1="294.15"
            x2="1188.66"
            y2="324.221"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#97AB5D" />
            <stop offset="1" stop-color="#A8BE69" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>
<style scoped>
@import url(assets/style.css);
.navbar {
  color: #806857;
}
</style>
<style module>
@import url(assets/style.css);
</style>

<script>
export default {

  
  mounted: function () {
    var _paq = window._paq = window._paq || [];

    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="https://florianeryan.matomo.cloud/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '1']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.async=true; g.src='//cdn.matomo.cloud/florianeryan.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
    })();

    if (window.outerWidth >= 992) {
      //Hover on homepage's svg
      document
        .getElementById("vagueAccueil1")
        .addEventListener("mouseover", function () {
          document.getElementById("Fond_rond").classList.add("fondRondIsHover");
        });

      document
        .getElementById("vagueAccueil1")
        .addEventListener("mouseleave", function () {
          document
            .getElementById("Fond_rond")
            .classList.remove("fondRondIsHover");
        });

      document
        .getElementById("vagueAccueil2")
        .addEventListener("mouseover", function () {
          document
            .getElementById("vagueAccueil1")
            .classList.add("vagueIsHover");
          document.getElementById("Fond_rond").classList.add("fondRondIsHover");
        });

      document
        .getElementById("vagueAccueil2")
        .addEventListener("mouseleave", function () {
          document
            .getElementById("vagueAccueil1")
            .classList.remove("vagueIsHover");
          document
            .getElementById("Fond_rond")
            .classList.remove("fondRondIsHover");
        });

      document
        .getElementById("vagueAccueil3")
        .addEventListener("mouseover", function () {
          document
            .getElementById("vagueAccueil1")
            .classList.add("vagueIsHover");
          document
            .getElementById("vagueAccueil2")
            .classList.add("vagueIsHover");
          document.getElementById("Fond_rond").classList.add("fondRondIsHover");
        });

      document
        .getElementById("vagueAccueil3")
        .addEventListener("mouseleave", function () {
          document
            .getElementById("vagueAccueil1")
            .classList.remove("vagueIsHover");
          document
            .getElementById("vagueAccueil2")
            .classList.remove("vagueIsHover");
          document
            .getElementById("Fond_rond")
            .classList.remove("fondRondIsHover");
        });

      //Hover on Tree Menu
      //Motion Design Link
      document
        .getElementById("treeCircle2")
        .addEventListener("mouseover", function () {
          document
            .getElementById("treeMenuText1")
            .classList.add("treeTextIsHover");
          document
            .getElementById("treeCircle2")
            .classList.add("treeCircleIsHover");
        });

      document
        .getElementById("treeCircle2")
        .addEventListener("mouseleave", function () {
          document
            .getElementById("treeMenuText1")
            .classList.remove("treeTextIsHover");
          document
            .getElementById("treeCircle2")
            .classList.remove("treeCircleIsHover");
        });

      document
        .getElementById("treeMenuText1")
        .addEventListener("mouseover", function () {
          document
            .getElementById("treeCircle2")
            .classList.add("treeCircleIsHover");
          document
            .getElementById("treeShadowCircle2")
            .classList.add("treeCircleIsHover");
        });
      document
        .getElementById("treeMenuText1")
        .addEventListener("mouseleave", function () {
          document
            .getElementById("treeCircle2")
            .classList.remove("treeCircleIsHover");
          document
            .getElementById("treeShadowCircle2")
            .classList.remove("treeCircleIsHover");
        });

      //Design Link
      document
        .getElementById("treeCircle1")
        .addEventListener("mouseover", function () {
          document
            .getElementById("treeMenuText2")
            .classList.add("treeTextIsHover");
          document
            .getElementById("treeCircle1")
            .classList.add("treeCircle1IsHover");
        });

      document
        .getElementById("treeCircle1")
        .addEventListener("mouseleave", function () {
          document
            .getElementById("treeMenuText2")
            .classList.remove("treeTextIsHover");
          document
            .getElementById("treeCircle1")
            .classList.remove("treeCircle1IsHover");
        });

      document
        .getElementById("treeMenuText2")
        .addEventListener("mouseover", function () {
          document
            .getElementById("treeCircle1")
            .classList.add("treeCircle1IsHover");
          document
            .getElementById("treeShadowCircle1")
            .classList.add("treeCircle1IsHover");
        });
      document
        .getElementById("treeMenuText2")
        .addEventListener("mouseleave", function () {
          document
            .getElementById("treeCircle1")
            .classList.remove("treeCircle1IsHover");
          document
            .getElementById("treeShadowCircle1")
            .classList.remove("treeCircle1IsHover");
        });

      //About me
      document
        .getElementById("treeCircle4")
        .addEventListener("mouseover", function () {
          document
            .getElementById("treeMenuText3")
            .classList.add("treeTextIsHover");
          document
            .getElementById("treeCircle4")
            .classList.add("treeCircleIsHover");
        });

      document
        .getElementById("treeCircle4")
        .addEventListener("mouseleave", function () {
          document
            .getElementById("treeMenuText3")
            .classList.remove("treeTextIsHover");
          document
            .getElementById("treeCircle4")
            .classList.remove("treeCircleIsHover");
        });

      document
        .getElementById("treeMenuText3")
        .addEventListener("mouseover", function () {
          document
            .getElementById("treeCircle4")
            .classList.add("treeCircleIsHover");
          document
            .getElementById("treeShadowCircle4")
            .classList.add("treeCircleIsHover");
        });
      document
        .getElementById("treeMenuText3")
        .addEventListener("mouseleave", function () {
          document
            .getElementById("treeCircle4")
            .classList.remove("treeCircleIsHover");
          document
            .getElementById("treeShadowCircle4")
            .classList.remove("treeCircleIsHover");
        });

      //Contact
      document
        .getElementById("treeCircle3")
        .addEventListener("mouseover", function () {
          document
            .getElementById("treeMenuText4")
            .classList.add("treeTextIs4Hover");
          document
            .getElementById("treeCircle3")
            .classList.add("treeCircleIs3Hover");
        });

      document
        .getElementById("treeCircle3")
        .addEventListener("mouseleave", function () {
          document
            .getElementById("treeMenuText4")
            .classList.remove("treeTextIs4Hover");
          document
            .getElementById("treeCircle3")
            .classList.remove("treeCircleIs3Hover");
        });

      document
        .getElementById("treeMenuText4")
        .addEventListener("mouseover", function () {
          document
            .getElementById("treeCircle3")
            .classList.add("treeCircleIs3Hover");
          document
            .getElementById("treeShadowCircle3")
            .classList.add("treeCircleIs3Hover");
        });
      document
        .getElementById("treeMenuText4")
        .addEventListener("mouseleave", function () {
          document
            .getElementById("treeCircle3")
            .classList.remove("treeCircleIs3Hover");
          document
            .getElementById("treeShadowCircle3")
            .classList.remove("treeCircleIs3Hover");
        });
    } else {
      let tab = $(".rellax");
      tab.each(function () {
        $(this).addClass("inMobileParallax");
      });
    }

    //Sticky menu
    var positionSticky = document.getElementById("aboutContainer").offsetTop;
    var colorChangePosition = document.getElementById(
      "motionDesignContainer"
    ).offsetTop;

    window.onscroll = function () {
      var currentPosition = window.pageYOffset;

      if (
        document.getElementById("aboutContainer").getBoundingClientRect().top -
          document.getElementById("aboutContainer").offsetHeight <
        -100
      ) {
        document.getElementById("navbar").classList.add("isVisible");
      } else {
        document.getElementById("navbar").classList.remove("isVisible");
      }

      if (currentPosition > positionSticky) {
        document.getElementById("navbar").classList.add("isSticky");
      } else {
        document.getElementById("navbar").classList.remove("isSticky");
      }

      if (currentPosition > colorChangePosition - 150) {
        for (
          let i = 0;
          i < document.getElementsByClassName("navbarLink").length;
          i++
        ) {
          const element = document.getElementsByClassName("navbarLink")[i];
          element.classList.add("isColorized");
        }
        for (
          let i = 0;
          i < document.getElementsByClassName("dots").length;
          i++
        ) {
          const element = document.getElementsByClassName("dots")[i];
          element.classList.add("isColorized");
        }
      } else {
        for (
          let i = 0;
          i < document.getElementsByClassName("navbarLink").length;
          i++
        ) {
          const element = document.getElementsByClassName("navbarLink")[i];
          element.classList.remove("isColorized");
        }
        for (
          let i = 0;
          i < document.getElementsByClassName("dots").length;
          i++
        ) {
          const element = document.getElementsByClassName("dots")[i];
          element.classList.remove("isColorized");
        }
      }
    };
  },
};
</script>
