;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-event" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M671.246336 338.944 479.491072 262.144 287.744 338.944 287.744 697.344 479.60064 620.544 670.623744 697.344 863.232 620.544 863.232 262.144Z"  ></path>' +
    '' +
    '<path d="M159.744 198.656l76.8 0 0 76.8-76.8 0 0-76.8Z"  ></path>' +
    '' +
    '<path d="M159.744 326.656l76.8 0 0 498.688-76.8 0 0-498.688Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zujian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M802.700825 491.297492c21.073968 0 41.129746 4.078899 60.164265 12.236696 19.035542 8.157797 35.690874 19.37528 49.967018 33.651424 14.276145 14.276145 25.493627 30.931476 33.651424 49.967018 8.157797 19.035542 12.236696 39.090297 12.236696 60.164265 0 21.754466-4.078899 41.97909-12.236696 60.673871-8.157797 18.694781-19.37528 35.181267-33.651424 49.457412-14.276145 14.276145-30.931476 25.493627-49.967018 33.651424-19.035542 8.157797-39.090297 12.236696-60.164265 12.236696-19.715017 0-38.239929-3.569292-55.57576-10.706853-17.33583-7.138584-32.801057-16.485463-46.397726-28.042683l0 127.467113c0 18.355043-6.458085 33.991162-19.37528 46.907333-12.916171 12.916171-28.55229 19.37528-46.907333 19.37528L131.714857 958.336488c-18.355043 0-34.161031-6.458085-47.417963-19.37528-13.256932-12.916171-19.884886-28.55229-19.884886-46.907333L64.412009 778.862907c3.399423-14.276145 9.517771-24.813129 18.355043-31.611975 8.837272-6.797823 21.754466-5.099135 38.749536 5.099135 8.157797 4.758374 14.276145 7.478322 18.355043 8.157797 17.675568 8.837272 35.690874 13.256932 54.045917 13.256932s35.521005-3.399423 51.496861-10.197246c15.975856-6.797823 29.912263-16.145725 41.809221-28.042683 11.896958-11.896958 21.24486-25.663496 28.042683-41.299615 6.797823-15.636119 10.197246-32.631188 10.197246-50.987255s-3.399423-35.521005-10.197246-51.496861c-6.797823-15.975856-16.145725-29.912263-28.042683-41.809221-11.896958-11.896958-25.833365-21.24486-41.809221-28.042683-15.975856-6.797823-33.141818-10.197246-51.496861-10.197246-17.675568 0-35.011398 3.739161-52.006468 11.217483-4.078899 1.359974-7.478322 2.718925-10.197246 4.078899-8.157797 4.078899-16.145725 7.818059-23.963785 11.217483-7.818059 3.399423-14.785751 4.758374-20.904099 4.078899-6.118348-0.679475-11.217483-4.078899-15.296381-10.197246-4.078899-6.118348-6.458085-16.315594-7.138584-30.591739L64.410985 394.423141c0-18.355043 6.627954-34.161031 19.884886-47.417963 13.256932-13.256932 29.062919-19.884886 47.417963-19.884886l159.079088 0c-10.876722-13.596669-19.545148-28.722158-26.003234-45.378513-6.458085-16.655332-9.68764-34.500768-9.68764-53.53631 0-22.433942 4.248767-43.339064 12.746302-62.71332 8.497535-19.37528 19.884886-36.20048 34.161031-50.476625 14.276145-14.276145 31.102369-25.663496 50.476625-34.161031 19.37528-8.497535 39.939641-12.746302 61.694107-12.746302 21.754466 0 42.318828 4.248767 61.694107 12.746302 19.37528 8.497535 36.20048 19.884886 50.476625 34.161031 14.276145 14.276145 25.663496 31.102369 34.161031 50.476625s12.746302 40.279379 12.746302 62.71332c0 38.07006-11.896958 71.04201-35.690874 98.9138l96.874351 0c18.355043 0 33.991162 6.627954 46.907333 19.884886 12.916171 13.256932 19.37528 29.062919 19.37528 47.417963l0 135.62491c13.596669-11.55722 29.062919-20.904099 46.397726-28.042683C764.459872 494.866784 782.985808 491.297492 802.700825 491.297492L802.700825 491.297492z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-package" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M200.30656 170.525792l201.952548 0c31.353079 0 56.790424 25.452695 56.790424 56.80475l0 201.937199c0 31.353079-25.437345 56.789401-56.790424 56.789401L200.30656 486.057141c-31.337729 0-56.789401-25.436322-56.789401-56.789401L143.517159 227.330542C143.518183 195.978487 168.969854 170.525792 200.30656 170.525792z"  ></path>' +
    '' +
    '<path d="M555.279201 195.777919l201.952548-50.488905c31.354102-7.887644 63.10627 11.247158 70.994937 42.600237l50.472532 201.937199c7.904017 31.353079-11.232832 63.107293-42.583864 70.993914L634.162806 511.308245c-31.337729 7.887644-63.09092-11.246135-70.995961-42.600237l-50.472532-201.937199C504.807692 235.419777 523.941472 203.666586 555.279201 195.777919z"  ></path>' +
    '' +
    '<path d="M200.30656 564.939723l201.952548 0c31.353079 0 56.790424 25.452695 56.790424 56.788377l0 201.938222c0 31.367405-25.437345 56.8201-56.790424 56.8201L200.30656 880.486422c-31.337729 0-56.789401-25.452695-56.789401-56.8201L143.517159 621.7281C143.518183 590.392418 168.969854 564.939723 200.30656 564.939723z"  ></path>' +
    '' +
    '<path d="M594.721515 564.939723l201.952548 0c31.353079 0 56.788377 25.452695 56.788377 56.788377l0 201.938222c0 31.367405-25.435299 56.8201-56.788377 56.8201L594.721515 880.486422c-31.338752 0-56.790424-25.452695-56.790424-56.8201L537.931091 621.7281C537.931091 590.392418 563.382762 564.939723 594.721515 564.939723z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gongju" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M942.4 289.088c0 0-127.36 128.384-140.352 141.504-12.992 13.056-56.96 11.712-56.96 11.712S628.8 429.12 611.968 412.416C595.328 395.648 583.808 273.92 583.808 273.92S580.544 240.064 597.312 223.232c16.704-16.768 141.056-141.184 141.056-141.184S754.304 64.128 731.2 64C656.64 63.744 505.152 65.472 431.808 139.008L416.576 154.048c-84.736 85.376-92.224 213.184-27.52 307.072L104.64 712.96c-34.176 34.176-71.104 135.168 0 206.4 71.104 71.232 171.776 34.176 205.824-0.064 0 0 203.264-228.928 252.608-283.2 93.568 67.136 222.336 60.48 308.096-25.6l15.104-15.104C957.376 524.032 959.68 373.76 960 297.728 960.192 273.472 942.4 289.088 942.4 289.088zM229.312 878.976c-46.656 0-84.352-37.632-84.352-84.288 0-46.528 37.76-84.288 84.352-84.288 46.592 0 84.224 37.824 84.224 84.288C313.536 841.344 275.904 878.976 229.312 878.976z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shijianzhongxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M325.944 340.162c-17.521 0-31.722 13.856-31.722 30.919s14.199 30.919 31.722 30.919c17.521 0 31.722-13.856 31.722-30.919 0-17.063-14.199-30.919-31.722-30.919v0zM325.944 475.063c-17.521 0-31.722 13.856-31.722 30.919s14.199 30.919 31.722 30.919c17.521 0 31.722-13.856 31.722-30.919 0-17.063-14.199-30.919-31.722-30.919v0zM325.944 610.076c-17.521 0-31.722 13.856-31.722 30.919s14.199 30.919 31.722 30.919c17.521 0 31.722-13.856 31.722-30.919 0-17.063-14.199-30.919-31.722-30.919v0zM718.849 608.244h-312.17c-7.215 0-13.055 5.725-13.055 12.711v35.271c0 6.986 5.84 12.711 13.055 12.711h312.17c7.215 0 13.055-5.725 13.055-12.711v-35.271c0-6.986-5.84-12.711-13.055-12.711v0zM718.849 338.445h-312.17c-7.215 0-13.055 5.725-13.055 12.711v35.271c0 6.986 5.84 12.711 13.055 12.711h312.17c7.215 0 13.055-5.725 13.055-12.711v-35.271c0-6.986-5.84-12.711-13.055-12.711v0zM718.849 473.344h-312.17c-7.215 0-13.055 5.725-13.055 12.711v35.271c0 6.986 5.84 12.711 13.055 12.711h312.17c7.215 0 13.055-5.725 13.055-12.711v-35.271c0-6.986-5.84-12.711-13.055-12.711v0zM718.849 473.344z"  ></path>' +
    '' +
    '<path d="M513.063 36.123c-259.035 0-469.057 210.022-469.057 469.057s210.022 469.057 469.057 469.057 469.057-210.022 469.057-469.057-210.022-469.057-469.057-469.057zM513.063 921.788c-230.177 0-416.609-186.432-416.609-416.609s186.432-416.609 416.609-416.609c230.177 0 416.609 186.432 416.609 416.609 0 230.062-186.546 416.609-416.609 416.609z"  ></path>' +
    '' +
    '<path d=""  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon11" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M830.588477 830.077336c-126.889969 0-640.58968 0-640.58968 0s-0.082888-412.234809-0.11461-640.58968c194.121186 0 552.908712 0 642.750903 0 124.843356 0 126.207423-125.525901 126.207423-125.525901L189.870884 63.961754 63.620481 63.961754l0 125.525901 0 769.526261 895.222031 0C958.842513 959.013917 957.478446 830.077336 830.588477 830.077336z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-function1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M889.344 752.384c-1.792 6.272-9.856 10.624-20.544 16.384-11.584 6.08-21.632 5.504-28.8 3.52-6.976-2.048-13.248-6.656-18.496-13.632l-96.256-127.36-116.8 126.72c-13.952 15.104-29.76 17.344-47.808 6.656-7.424-4.352-20.992-20.48-22.592-27.776-1.536-7.232 1.344-14.848 8.768-22.976l129.152-140.544L581.888 448.896C577.984 443.2 577.6 436.544 580.672 428.992c2.944-7.552 9.92-12.032 17.344-16.448 10.688-6.016 20.48-6.208 27.712-5.632C633.024 407.36 639.616 411.52 645.696 419.2l78.208 101.952 94.656-103.104C826.752 408.96 836.032 405.76 844.992 403.2c8.896-2.56 26.496 6.656 36.096 12.032 9.856 5.312 14.976 11.456 15.616 18.368 0.576 6.912-2.112 13.696-8.256 20.416l-115.648 125.44 114.112 156.48C890.496 740.608 891.392 746.24 889.344 752.384zM592.128 128.576C552 124.032 467.968 118.016 417.024 150.976 365.952 184.064 336.64 240.896 322.432 308.48L302.4 403.968 158.592 403.968c-16.704 0-30.016 4.8-31.424 34.752 1.408 16.32 14.72 29.248 31.424 29.248L288.64 467.968l-85.696 418.688c0 0-21.952 68.288 26.048 71.296 41.92 2.624 50.24-65.6 50.24-65.6l86.4-424.384 109.76 0c17.664 0 32-14.336 32-32s-14.336-32-32-32L379.264 403.968l19.008-93.568C438.912 161.28 514.688 197.504 584.704 197.504c11.456 0 54.656 3.008 57.664-26.56C646.208 133.952 609.024 130.496 592.128 128.576zM126.592 443.392c0-1.92 0.448-2.88 0.576-4.608C127.04 437.824 126.592 436.992 126.592 435.968L126.592 443.392z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-function" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999488 65.203024 84.617701 381.100718l427.381787 315.90281 427.380764-315.90281L511.999488 65.203024zM511.999488 65.203024"  ></path>' +
    '' +
    '<path d="M908.127458 488.066915l-396.127969 292.808836-396.120806-292.808836-31.260981 23.100114 0 0 0 0 427.381787 315.90895 427.380764-315.90895-0.005117-0.00614L908.127458 488.066915zM908.127458 488.066915"  ></path>' +
    '' +
    '<path d="M908.127458 618.151645 511.999488 910.949224 115.878682 618.156762l-31.260981 23.101137 0 0 0 0 427.381787 315.89053 427.380764-315.89053-0.005117-0.00614L908.127458 618.151645zM908.127458 618.151645"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-function2" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M969.00162 964.481 55.00162 964.481c-20.968 0-40.111-11.922-49.36-30.739-9.249-18.818-6.994-41.258 5.815-57.858L292.21062 512 11.45662 148.116C-1.35238 131.515-3.60738 109.076 5.64162 90.258 14.89062 71.44 34.03362 59.519 55.00162 59.519l914 0c30.376 0 55 24.625 55 55s-24.624 55-55 55L166.90462 169.519l238.319 308.884c15.273 19.795 15.273 47.4 0 67.195L166.90462 854.481 969.00162 854.481c30.376 0 55 24.624 55 55S999.37762 964.481 969.00162 964.481z"  ></path>' +
    '' +
    '<path d="M536.07762 310.299m-45.005 0a45.005 45.005 0 1 0 90.01 0 45.005 45.005 0 1 0-90.01 0Z"  ></path>' +
    '' +
    '<path d="M722.07262 310.299m-45.005 0a45.005 45.005 0 1 0 90.01 0 45.005 45.005 0 1 0-90.01 0Z"  ></path>' +
    '' +
    '<path d="M908.06862 310.299m-45.005 0a45.005 45.005 0 1 0 90.01 0 45.005 45.005 0 1 0-90.01 0Z"  ></path>' +
    '' +
    '<path d="M536.07762 462.315m-45.005 0a45.005 45.005 0 1 0 90.01 0 45.005 45.005 0 1 0-90.01 0Z"  ></path>' +
    '' +
    '<path d="M722.07262 462.315m-45.005 0a45.005 45.005 0 1 0 90.01 0 45.005 45.005 0 1 0-90.01 0Z"  ></path>' +
    '' +
    '<path d="M908.06862 462.315m-45.005 0a45.005 45.005 0 1 0 90.01 0 45.005 45.005 0 1 0-90.01 0Z"  ></path>' +
    '' +
    '<path d="M955.19762 639.333c0 27.064-26.194 49.004-58.506 49.004L547.45462 688.337c-32.312 0-58.506-21.94-58.506-49.004l0 0c0-27.064 26.194-49.004 58.506-49.004L896.69162 590.329C929.00362 590.329 955.19762 612.269 955.19762 639.333L955.19762 639.333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangmubao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M941.83542 381.178353 512.004045 63.472158 82.160079 381.178353l429.843966 317.707195L941.83542 381.178353zM512.004045 109.950446l366.951207 271.227907-366.951207 271.227907L145.047642 381.178353 512.004045 109.950446zM910.401931 488.763211l-398.403882 294.476145L113.600563 488.763211l-31.440683 23.235646 0 0 0 0 429.83797 317.705795L941.83542 511.998857l-0.005996-0.005996L910.401931 488.763211zM910.401931 619.582715 511.998049 914.05926 113.600563 619.582715l-31.440683 23.237245 0 0 0 0 429.83797 317.705795L941.83542 642.81976l-0.005996-0.006995L910.401931 619.582715z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanzeyingyongduixiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M888.658546 276.483009 527.648398 68.039629c-9.66922-5.597485-21.577434-5.597485-31.246655 0L135.340431 276.483009c-9.66922 5.571902-15.622816 15.903202-15.622816 27.073612l0 416.886759c0 11.17041 5.953595 21.500687 15.622816 27.073612l361.061312 208.443379c4.834098 2.798742 10.228969 4.198625 15.622816 4.198625 5.393847 0 10.788717-1.399883 15.622816-4.198625l361.010147-208.443379c9.66922-5.571902 15.622816-15.903202 15.622816-27.073612L904.280338 303.556621C904.281361 292.38621 898.327766 282.055934 888.658546 276.483009zM841.789075 702.403514 512.025583 892.780423 182.209902 702.403514 182.209902 321.596486 512.025583 131.218554l329.764516 190.377932L841.790098 702.403514z"  ></path>' +
    '' +
    '<path d="M291.01191 348.288404c-15.063067-8.676613-34.095539-3.536546-42.696428 11.449773-8.651031 14.936177-3.510964 34.07098 11.449773 42.696428l221.013673 127.60526 0 255.210519c0 17.276479 13.994736 31.271214 31.246655 31.271214 17.251919 0 31.245631-13.994736 31.245631-31.271214L543.271214 530.039865l221.013673-127.60526c14.96176-8.625448 20.101827-27.760251 11.449773-42.696428-8.651031-14.987343-27.633361-20.126386-42.696428-11.449773L512.025583 475.905944 291.01191 348.288404z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shijianjiankong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M852.650667 506.709333c-13.041778 6.528-24.391111 12.245333-25.912889 12.913778L512 664.704 197.290667 519.623111l-1.863111 3.498667 1.436444-3.640889c-2.119111-0.839111-28.743111-13.027556-47.914667-23.978667l-8.604444-4.920889 0 9.912889c0 5.233778 0.668444 51.512889 24.32 64.071111l310.385778 139.505778c13.056 6.158222 24.192 10.254222 36.096 10.254222 11.847111 0 23.608889-4.081778 37.703111-10.197333l310.584889-139.591111c19.882667-9.287111 24.234667-49.379556 24.234667-64.042667l0-9.301333L852.650667 506.709333 852.650667 506.709333zM852.650667 506.709333"  ></path>' +
    '' +
    '<path d="M826.737778 665.784889 512 810.908444 197.290667 665.784889l-1.863111 3.484444 1.422222-3.626667c-2.090667-0.824889-28.558222-12.928-47.886222-23.992889l-8.604444-4.920889 0 9.898667c0 5.233778 0.682667 51.498667 24.32 64.071111l310.385778 139.534222c13.056 6.158222 24.206222 10.268444 36.110222 10.268444 11.832889 0 23.594667-4.067556 37.703111-10.225778l310.542222-139.605333c19.882667-9.258667 24.248889-49.365333 24.248889-64.028444l0-9.301333-27.278222 13.667556C841.870222 658.318222 828.401778 665.073778 826.737778 665.784889L826.737778 665.784889zM826.737778 665.784889"  ></path>' +
    '' +
    '<path d="M164.664889 418.360889l310.4 139.52c13.041778 6.144 24.177778 10.24 36.081778 10.24 11.847111 0 23.594667-4.067556 37.703111-10.183111l310.570667-139.619556c12.231111-5.703111 20.181333-19.996444 20.721778-37.304889 0.597333-18.602667-7.210667-34.659556-20.451556-41.927111L549.447111 175.317333c-26.197333-15.530667-43.064889-15.914667-74.624-0.142222L163.911111 339.342222c-13.44 8.661333-21.333333 25.031111-20.593778 42.680889C144 398.051556 151.864889 411.562667 164.664889 418.360889L164.664889 418.360889zM208.213333 378.026667 512 214.613333 815.815111 378.026667 512 506.040889 208.213333 378.026667 208.213333 378.026667zM208.213333 378.026667"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-baoyou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M528.8552 943.438655V485.227447l430.849921-183.27445V738.59299L528.8552 943.438655zM67.646056 271.71664l443.045419-191.155295 448.473035 190.716048-448.04198 190.073048-443.476474-189.633801z m429.502487 671.722015L64.830371 738.59299V301.954021l432.318172 183.274449v458.210185zM197.500312 471.870862l-0.953237 61.156671 166.64348 77.591054 0.956309-61.171005L197.500312 471.870862z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zujian1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M121.856 349.696h406.016c4.096 0 7.68-3.072 7.68-7.68V169.984c0-4.096-3.072-7.68-7.68-7.68H121.856c-4.096 0-7.68 3.072-7.68 7.68v172.032c0.512 4.096 3.584 7.68 7.68 7.68z m780.288 278.528H121.856c-4.096 0-7.68 3.072-7.68 7.68v218.112c0 4.096 3.072 7.68 7.68 7.68h780.288c4.096 0 7.68-3.072 7.68-7.68v-218.112c-0.512-4.096-3.584-7.68-7.68-7.68z m-780.288-46.08h406.016c4.096 0 7.68-3.072 7.68-7.68V402.944c0-4.096-3.072-7.68-7.68-7.68H121.856c-4.096 0-7.68 3.072-7.68 7.68v172.032c0.512 4.096 3.584 7.168 7.68 7.168z m780.288-419.328h-311.808c-4.096 0-7.68 3.072-7.68 7.68v404.48c0 4.096 3.072 7.68 7.68 7.68h311.808c4.096 0 7.68-3.072 7.68-7.68v-404.48c-0.512-4.608-3.584-7.68-7.68-7.68z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinru2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 62c-192.858 0-353.572 122.142-417.858 289.286h70.714c19.286-38.572 45-77.142 77.142-109.286 70.714-77.142 167.142-115.714 270-115.714s199.286 38.572 270 115.714c70.714 70.714 115.714 167.142 115.714 270s-38.572 199.286-115.714 270c-70.714 70.714-167.142 115.714-270 115.714s-199.286-38.572-270-115.714c-32.142-32.142-57.858-70.714-77.142-109.286h-70.714c64.286 167.142 225 289.286 417.858 289.286 250.714 0 450-199.286 450-450s-205.714-450-450-450zM415.572 647l45 45 180-180-180-180-45 45 102.858 102.858h-456.428v64.286h456.428l-102.858 102.858z" fill="#040000" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-louyutubiaoshijianzhongxin-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896.512 640c-0.129 0-0.32 0-0.448 0v0 0-218.304c0-144.64-110.4-266.368-258.112-311.68-0.832-60.864-57.344-110.016-127.040-110.016-70.209 0-127.168 49.856-127.167 111.232-145.344 46.4-255.744 167.232-255.744 310.464v218.304c-0.512 0-0.96 0.128-1.472 0.192-69.632 0.832-125.76 57.024-126.4 126.72 0 0.32-0.128 0.704-0.128 1.088 0 42.624 21.056 80.128 53.12 103.424 4.224 3.072 8.704 5.632 13.248 8.128 11.136 6.144 22.976 11.264 35.84 13.888 8.321 1.664 16.96 2.56 25.792 2.56h203.775c26.432 74.432 96.768 128 180.224 128s153.792-53.568 180.224-128h203.775c8.832 0 17.472-0.896 25.792-2.624 58.368-11.904 102.208-63.552 102.208-125.376 0-70.528-57.024-128-127.488-128zM512 960c-47.168 0-88-25.92-110.208-64h220.416c-22.208 38.080-63.040 64-110.208 64zM891.072 832h-763.071c-8.193 0-15.872-1.856-23.040-4.672-6.976-2.88-13.376-6.976-18.944-11.904-0.641-0.512-1.408-0.832-2.048-1.408-2.048-1.984-3.328-4.416-5.12-6.656-4.096-4.736-7.424-9.92-9.984-15.424-2.752-6.784-4.224-14.272-4.48-22.016v0c0-0.129-0.064-0.192-0.064-0.32 0-0.512-0.32-1.024-0.32-1.6 0-35.263 28.672-64 64-64v0h64v-282.304c0-108.928 84.991-209.216 211.328-249.472l44.671-14.208v-46.784c0-25.6 28.8-47.232 63.040-47.232 33.856 0 62.592 21.44 62.912 46.848l0.576 46.72 44.608 13.696c127.36 38.976 212.865 139.648 212.864 250.432v282.304h64c35.263 0 63.936 28.672 64 63.936v0.064c0 0.641-0.32 1.216-0.384 1.856v0c-0.256 7.744-1.664 15.232-4.48 22.080-2.56 5.504-5.888 10.688-9.92 15.36-1.792 2.24-3.136 4.735-5.184 6.72-0.32 0.32-0.768 0.576-1.153 0.768-0.256 0.192-0.576 0.32-0.832 0.512-5.568 4.992-11.968 9.088-18.944 11.968-7.168 2.88-14.912 4.735-23.104 4.736h-4.929z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)