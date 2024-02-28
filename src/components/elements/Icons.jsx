import React from 'react'
function Icons({name, color, size}){
    let nClass = "logo"
    if(color === "blue")
        nClass+= " logo_blue"

    if(size === "big")
        nClass+= " logo_big"

    if(name === "git") return(
        <a href="https://github.com/Vampika" target="_blank"> 
            <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" className={nClass}>
                <path d="M22.6333 2.30997C15.5167 3.89664 9.68333 7.83997 5.67 13.8133C-1.35333 24.3366 0.0466658 38.4533 9.00667 47.46C11.69 50.1666 15.7733 52.78 18.8533 53.7833C19.9967 54.1566 20.1367 54.1566 20.65 53.8066C21.21 53.4333 21.2333 53.34 21.2333 50.6566V47.9033L19.18 48.02C16.7767 48.1366 14.91 47.7166 13.79 46.76C13.3933 46.4333 12.6233 45.3133 12.0867 44.2866C11.2 42.56 10.5467 41.7666 8.72667 40.1566C8.12 39.62 8.09667 39.5966 8.51667 39.2933C9.52 38.5466 11.55 39.27 12.8333 40.81C15.0733 43.54 15.9367 44.2633 17.22 44.5433C18.3633 44.7766 19.4133 44.6833 21 44.2166C21.21 44.1466 21.49 43.6566 21.63 43.0966C21.77 42.56 22.1433 41.7433 22.4467 41.3L23.0067 40.4833L21.1167 40.11C17.15 39.2933 14.7 37.87 13.09 35.4433C11.5967 33.2033 11.1067 31.2666 11.0833 27.65C11.0833 24.2433 11.4567 22.8433 12.9267 20.93C13.58 20.09 13.65 19.8333 13.4633 19.3433C13.1133 18.5033 13.2067 14.9566 13.58 13.8833C13.8833 13.09 14.0467 12.95 14.6767 12.88C15.7267 12.7633 17.6867 13.44 19.67 14.56L21.3733 15.54L22.8667 15.19C24.99 14.7 31.36 14.7233 33.2733 15.19L34.72 15.5633L36.0733 14.7466C37.87 13.6733 40.1567 12.8333 41.3 12.8333C42.21 12.8333 42.21 12.8566 42.5833 14.0466C42.98 15.4233 43.05 17.92 42.7 19.11C42.5133 19.81 42.56 20.02 43.0733 20.6966C45.6167 24.0566 45.8967 29.6333 43.75 34.2066C42.3033 37.2166 39.2467 39.3166 35.14 40.0866L33.18 40.46L33.9033 41.7433L34.65 43.05L34.72 48.2533L34.8133 53.4566L35.3967 53.83C35.9333 54.18 36.05 54.18 37.17 53.7833C39.0367 53.1533 42.2333 51.4266 43.9833 50.0966C54.39 42.3033 57.75 28.3266 51.9867 16.7066C48.6033 9.86997 42.21 4.61997 34.8833 2.65997C31.6867 1.81997 25.6667 1.63331 22.6333 2.30997Z" />
            </svg>
        </a>
    )

    if(name === "hh") return(
        <a href="https://spb.hh.ru/resume/e8d0e8c4ff0c47fa9f0039ed1f487939323061" target="_blank"> 
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={nClass}>
                <g clipPath="url(#clip0_34_158)">
                    <path d="M28 56C43.4642 56 56 43.4642 56 28C56 12.5358 43.4642 0 28 0C12.5358 0 0 12.5358 0 28C0 43.4642 12.5358 56 28 56Z"/>
                    <path d="M15.925 15.3643V24.8889C17.3752 23.1599 19.1135 22.2896 21.1295 22.2896C22.1678 22.2896 23.0977 22.4879 23.9318 22.8811C24.7683 23.2719 25.3937 23.7736 25.816 24.3826C26.2407 24.9974 26.5277 25.6706 26.6828 26.4126C26.8368 27.1511 26.9138 28.3003 26.9138 29.8589V40.0428H22.4082V30.8704C22.4082 29.0504 22.3265 27.8978 22.155 27.4078C21.9943 26.9278 21.6756 26.5165 21.2508 26.2411C20.8168 25.9483 20.2767 25.8036 19.6245 25.8036C18.8778 25.8036 18.2082 25.9903 17.626 26.3613C17.031 26.7346 16.604 27.2923 16.3333 28.0378C16.058 28.7844 15.9203 29.8869 15.925 31.3464L15.9203 40.0428H11.4205V15.3643H15.9262M33.6665 15.3643V24.8889C35.1178 23.1599 36.855 22.2896 38.8698 22.2896C39.9047 22.2896 40.8415 22.4879 41.6768 22.8811C42.5098 23.2719 43.1352 23.7736 43.5552 24.3826C43.979 24.9933 44.274 25.6841 44.422 26.4126C44.5772 27.1511 44.6542 28.3003 44.6542 29.8589V40.0428H40.1532V30.8704C40.1532 29.0504 40.068 27.8978 39.8965 27.4078C39.7358 26.9271 39.416 26.5156 38.99 26.2411C38.5607 25.9483 38.0158 25.8036 37.3637 25.8036C36.6182 25.8036 35.9485 25.9903 35.3652 26.3613C34.7783 26.7346 34.349 27.2923 34.0748 28.0378C33.8042 28.7844 33.6665 29.8869 33.6665 31.3464V40.0428H29.1667V15.3643H33.6665Z" fill="#222222"/>
                </g>
                <defs>
                    <clipPath id="clip0_34_158">
                    <rect width="56" height="56" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

        </a>
    )

    if(name === "tg") return(
        <a href="https://t.me/KseniiaVampika" target="_blank"> 
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px" className={nClass}><path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z" /></svg>
        </a>
    )

    if(name === "codewars") return(
        <a href="https://www.codewars.com/users/Vampika" target="_blank"> 
            <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"  className={nClass}>
                <g clipPath="url(#clip0_34_155)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M44.233 37.0969C43.8514 37.4078 43.3849 37.5634 42.876 37.5245C43.0881 38.1075 42.9184 38.7685 42.4519 39.1961C41.9854 39.6237 41.2645 39.7793 40.6283 39.546C40.5859 40.0125 40.2467 40.4401 39.7802 40.6345C39.2713 40.8288 38.6775 40.751 38.2534 40.4401C38.0413 40.8677 37.5324 41.1399 37.0235 41.101C37.0235 41.3731 36.9386 41.6064 36.7691 41.8396C36.2177 42.9671 34.8183 43.5112 33.5459 43.0447C33.5883 44.0944 32.6977 44.9885 31.5104 45.0274C30.959 45.0274 30.4077 44.8719 29.9836 44.4831C29.6866 45.1052 29.0928 45.4939 28.372 45.5328C27.6509 45.5717 26.9725 45.2219 26.6333 44.6387C26.209 45.1441 25.5306 45.3773 24.852 45.2219C24.1735 45.0663 23.6646 44.5609 23.5373 43.9777C23.0284 44.1722 22.477 44.1333 22.053 43.8223C21.6289 43.5112 21.4168 43.0447 21.5016 42.5393L20.9503 42.5006C20.3565 42.345 20.0173 41.7618 20.1446 41.2176C19.7629 41.5676 19.2964 41.723 18.7451 41.7618C17.3456 41.8785 16.158 40.9844 16.0308 39.7793C15.3098 40.168 14.4192 40.0902 13.7407 39.6237C13.0621 39.1572 12.7653 38.3798 12.9773 37.641C11.9595 37.7577 11.0265 37.058 10.9417 36.125C10.8992 35.7362 11.0265 35.3086 11.2385 34.9975C10.3055 34.881 9.62696 34.0645 9.75418 33.2092C9.79661 32.8205 10.0511 32.4318 10.3903 32.1986C9.96624 31.8875 9.75418 31.421 9.83901 30.9156C9.92383 30.4103 10.3055 30.0214 10.8144 29.866C10.4327 29.4384 10.4752 28.7775 10.8992 28.3887H10.9417C10.6448 28.2332 10.3903 28.0389 10.1783 27.7667C9.3725 26.756 9.58455 25.3565 10.6448 24.579C9.92383 24.1901 9.49974 23.4516 9.62696 22.713C9.71177 21.9355 10.3055 21.3134 11.1113 21.0801C10.6872 20.536 10.6448 19.8361 10.9841 19.2531C11.3233 18.6699 12.0443 18.3201 12.7653 18.3977C12.5108 17.8147 12.6804 17.1537 13.147 16.7261C13.6134 16.2985 14.3344 16.1429 14.9706 16.3763C15.013 15.9098 15.3522 15.4821 15.8612 15.2878C16.3701 15.0934 16.9214 15.1711 17.3456 15.4821C17.5575 15.0156 18.0665 14.7435 18.5754 14.7824L18.6178 14.899C18.6178 14.1604 19.0419 13.4606 19.7205 13.033C20.3989 12.6054 21.2472 12.5276 22.0105 12.7997L22.1378 12.1388C22.3498 11.5168 22.9435 11.0503 23.6222 10.8948C24.3006 10.7393 25.0217 10.9337 25.573 11.3613C25.8274 10.7393 26.4636 10.3117 27.2269 10.2728C27.9479 10.234 28.6264 10.5838 28.9657 11.2058C29.3898 10.7004 30.0683 10.4672 30.7469 10.6227C31.4255 10.7782 31.9344 11.2836 32.0615 11.8667C32.5704 11.6723 33.1218 11.7501 33.5459 12.0611C33.9699 12.3721 34.1821 12.8775 34.0548 13.344C34.691 13.2274 35.3272 13.6161 35.4543 14.1992C35.4967 14.3547 35.4967 14.4714 35.4543 14.6269C35.8361 14.277 36.3026 14.1215 36.8539 14.0437C38.2534 13.966 39.3984 14.8601 39.5257 16.0653C40.2467 15.6766 41.1797 15.7153 41.8581 16.1818C42.5368 16.6483 42.8336 17.4648 42.6216 18.2034C43.6394 18.0868 44.5724 18.7866 44.6573 19.7195C44.6997 20.1084 44.5724 20.536 44.3603 20.8469C45.0389 20.9636 45.5903 21.3912 45.7598 22.0131C45.9295 22.6352 45.7174 23.2573 45.1662 23.646C45.463 23.8403 45.6751 24.1514 45.7598 24.4624C45.8447 25.1232 45.463 25.7452 44.7844 26.0173C45.1662 26.4449 45.1238 27.1059 44.6997 27.4946C45.4206 27.8833 45.8871 28.5832 45.9295 29.3218C45.9719 30.0992 45.5903 30.7991 44.9541 31.2656C45.1662 31.3821 45.3357 31.4988 45.5054 31.6932C45.9719 32.1986 46.0992 32.8594 45.9295 33.4815C45.7174 34.1034 45.2085 34.5699 44.53 34.7643C45.0814 35.5418 44.9541 36.5526 44.233 37.0969ZM50.5522 10.5838L32.9098 1.25373C29.7715 -0.41791 25.8698 -0.41791 22.7314 1.25373L5.08914 10.5838C1.95084 12.2555 0 15.3266 0 18.6699V37.3301C0 40.6734 1.95084 43.7446 5.08914 45.4162L22.7314 54.7462C25.8698 56.418 29.7715 56.418 32.9098 54.7462L50.5522 45.4162C53.6904 43.7446 55.6413 40.6734 55.6413 37.3301V18.631C55.6413 15.3266 53.6904 12.2555 50.5522 10.5838ZM14.2496 25.1236C14.7585 25.7455 14.8858 26.5619 14.5889 27.3006C15.6067 27.3784 16.4125 28.117 16.4973 29.05C17.4303 28.8556 18.3632 29.3221 18.7026 30.0997C19.4659 29.5943 20.5686 29.7108 21.12 30.4495L21.2048 30.5273L21.4168 30.3329C21.8833 29.9441 22.6043 29.9052 23.1557 30.2551C23.2405 30.0219 23.3676 29.8275 23.5373 29.6721C24.0038 29.3221 24.5976 29.2832 25.0641 29.5943C25.1489 29.3221 25.4033 29.1278 25.7001 29.0889C25.4881 28.7779 25.4033 28.4279 25.3609 28.0781V28.117C24.9368 28.2336 24.5127 28.0392 24.3855 27.6894C24.3855 27.6505 24.3855 27.6505 24.343 27.6116C23.9614 27.806 23.4949 27.8449 23.1132 27.6505C22.7316 27.456 22.477 27.1062 22.4346 26.7174C22.1802 26.7952 21.7984 26.8341 21.5016 26.7174C20.7808 26.4843 20.3989 25.7844 20.6111 25.1236C19.9749 25.1625 19.3811 24.8514 19.0419 24.346C18.7026 23.8408 18.7451 23.2187 19.0843 22.7133C18.4057 22.5577 17.8545 22.0136 17.7272 21.3915C17.5575 20.7306 17.8121 20.0698 18.3632 19.681C17.5575 19.0201 17.4727 17.8928 18.1089 17.1153C18.0592 17.1153 18.024 17.1019 17.995 17.0909C17.9743 17.0831 17.9568 17.0764 17.9392 17.0764C17.8545 17.4263 17.5575 17.7372 17.2183 17.8928C16.879 18.0871 16.4549 18.0871 16.0732 18.0094C16.0308 18.8258 15.2674 19.4866 14.3768 19.5255C14.6313 19.9531 14.6737 20.4974 14.4617 20.9639C14.2496 21.4304 13.8255 21.7803 13.3166 21.9358C13.9951 22.7133 13.9527 23.8019 13.1894 24.5016C13.5711 24.5016 13.9527 24.7349 14.2496 25.1236ZM26.7604 34.4926C25.7849 34.5702 25.1063 35.3867 25.2336 36.242C24.3006 36.0864 23.3676 36.6307 23.0706 37.4082C22.1376 37.0194 21.0776 37.2915 20.4838 38.0691L20.4414 38.0302C19.5932 37.0583 18.024 36.9416 16.9637 37.7191C16.7093 36.7861 15.649 36.1642 14.5888 36.3196C14.6736 35.8532 14.5464 35.3478 14.2071 34.9589C13.8679 34.5702 13.4013 34.337 12.85 34.2981C13.3165 33.5984 13.0621 32.6654 12.2987 32.1989C12.638 31.8878 12.85 31.4213 12.7228 30.9548C12.6804 30.6827 12.5107 30.4106 12.2987 30.2162C12.3835 30.2162 12.4683 30.1773 12.5532 30.1384C13.0197 30.9548 14.0799 31.3437 15.0553 31.0714C15.1401 31.7324 15.649 32.2378 16.2852 32.471C16.9213 32.7043 17.6424 32.5876 18.1936 32.16C18.4481 32.5876 18.8722 32.9375 19.4235 33.0153C19.9749 33.093 20.5262 32.9375 20.9079 32.6265C21.0351 32.5488 21.2471 32.3543 21.2895 32.1989C21.6287 32.5876 22.1801 32.7043 22.689 32.5876C23.1979 32.471 23.5796 32.0822 23.7068 31.6157C24.1309 31.8102 24.5974 31.8489 25.0215 31.6157C25.4457 31.3824 25.6577 30.9937 25.6577 30.566C25.8698 30.6438 26.1666 30.566 26.3363 30.4106C26.5058 30.294 26.5907 30.0995 26.6331 29.9441C27.0147 30.1384 27.4388 30.2551 27.8631 30.2551C27.7782 30.3718 27.7782 30.5272 27.7782 30.6438C27.8206 30.7994 27.8631 30.9548 27.9902 31.0326C27.4812 31.2659 27.2269 31.7713 27.3117 32.2767C27.3117 32.471 27.4812 32.7043 27.6509 32.8597C27.0572 33.0542 26.7179 33.6761 26.8452 34.2592L26.8876 34.4926H26.7604ZM30.4075 19.7587C30.4499 20.1863 30.3228 20.6528 29.9834 20.9639C29.6442 21.3138 29.2201 21.508 28.7112 21.508L28.7536 21.7414C28.8809 22.3246 28.5839 22.9465 27.9902 23.1409H27.9479C28.4567 23.6074 28.4567 24.346 27.9479 24.7736C27.8631 24.8514 27.7782 24.9292 27.6509 24.9681C27.7782 25.1235 27.8631 25.279 27.8206 25.4735C28.2447 25.4735 28.7112 25.59 29.0928 25.8233C29.2625 25.5122 29.6018 25.3568 29.9834 25.4346C29.9834 25.007 30.1955 24.6181 30.6196 24.3849C31.0437 24.1516 31.5102 24.1904 31.9343 24.3849C31.9343 24.1128 32.104 23.8795 32.3583 23.6852C32.9945 23.2187 33.8427 23.2574 34.3093 23.8017C34.7758 23.0242 35.7935 22.7522 36.6418 23.1409C36.9386 23.2963 37.1932 23.5296 37.3627 23.8017C37.914 23.3741 38.6351 23.2574 39.2711 23.4908C39.9073 23.7239 40.4162 24.2293 40.5011 24.8903C41.4765 24.5793 42.5368 24.9681 43.0033 25.8233L43.2152 25.7066C42.6216 25.2012 42.5792 24.346 43.1304 23.8017C43.1466 23.7869 43.1567 23.772 43.1651 23.7594C43.1791 23.7389 43.1891 23.7239 43.2152 23.7239C42.4519 23.2574 42.1974 22.3246 42.6639 21.6247C42.1127 21.6247 41.6038 21.3915 41.2644 20.9639C40.9251 20.575 40.7979 20.0698 40.8827 19.5644C39.8224 19.7198 38.7622 19.0979 38.5078 18.1648C37.4475 18.9423 35.8784 18.7868 35.0302 17.815C34.4364 18.5925 33.3339 18.8645 32.4008 18.4369C32.2312 19.331 31.3407 19.8753 30.4075 19.7587ZM21.1624 22.0134C21.7562 21.3138 21.6713 20.303 20.9927 19.681C21.841 19.0979 22.0954 18.0871 21.6713 17.2707C23.0284 17.0375 23.919 15.8712 23.707 14.6272C24.7673 14.8993 25.8274 14.3162 26.1668 13.3832C26.5908 13.6942 27.1422 13.8108 27.6511 13.7331C28.16 13.6553 28.6265 13.3832 28.9233 12.9556C29.4322 13.6553 30.4077 13.8886 31.2134 13.4609C31.3407 13.9274 31.6376 14.3551 32.1888 14.5106C32.4858 14.5883 32.825 14.5494 33.1218 14.4328L33.1642 14.8604C32.3161 14.9771 31.5952 15.5602 31.4255 16.3377C30.7469 16.1045 30.026 16.1821 29.4747 16.6099C28.9233 17.0375 28.6689 17.6983 28.7961 18.3204C28.16 18.3204 27.5663 18.5925 27.227 19.0979C26.9301 19.6033 26.8876 20.2252 27.227 20.7306C26.7181 20.8472 26.2939 21.1971 26.1668 21.6636C26.0395 22.1301 26.2092 22.6355 26.5908 22.9465C26.2092 23.1409 25.9546 23.5296 25.9546 23.9184C25.9546 24.346 26.1668 24.696 26.5484 24.9292C26.4211 25.1236 26.2939 25.3568 26.3363 25.5901L26.4636 25.9011C26.1243 26.1343 25.8274 26.4454 25.6154 26.7952C25.4033 26.6786 25.1489 26.6008 24.8944 26.6786C24.9368 26.2898 24.7673 25.9011 24.4279 25.6678C24.0887 25.4346 23.6222 25.3568 23.2405 25.4735C23.3254 24.9292 22.9011 24.3849 22.2651 24.2295L22.0105 24.1517C22.2227 23.763 22.2651 23.3354 22.0954 22.9076C21.9257 22.5188 21.5865 22.169 21.1624 22.0134ZM41.1797 35.1534C41.3916 34.6869 41.8157 34.337 42.3246 34.1815C41.6462 33.404 41.6886 32.3154 42.4519 31.6157C41.9854 31.4991 41.6038 31.227 41.3492 30.8772H41.307C40.798 30.2551 40.6708 29.4387 40.9676 28.7002C39.9497 28.6224 39.144 27.8836 39.0592 26.9506C38.1686 27.1451 37.2356 26.6786 36.8964 25.9011C36.5145 26.1732 36.0056 26.2898 35.5391 26.212C35.0726 26.1343 34.6486 25.8622 34.3942 25.4735L34.1821 25.6678C33.7156 26.0565 32.9947 26.0954 32.4858 25.7844C32.4009 26.0178 32.2312 26.212 32.0615 26.3676C31.6375 26.7174 31.0014 26.7563 30.5349 26.4454C30.4925 26.6397 30.3228 26.7952 30.1107 26.9119C30.2804 27.2228 30.4077 27.6116 30.4077 28.0003H30.7469C31.0437 28.0781 31.2134 28.2724 31.2558 28.5057C31.6375 28.2724 32.104 28.2724 32.528 28.4668C32.9098 28.6613 33.2066 29.0111 33.2066 29.4387C33.5034 29.3221 33.8428 29.3221 34.1396 29.4387C34.8607 29.6719 35.2423 30.3718 35.0302 31.0326C35.7088 30.9549 36.3874 31.2659 36.7267 31.8102C37.0659 32.3543 37.0235 33.0153 36.6418 33.5207C37.278 33.715 37.7445 34.2204 37.8718 34.8424C37.9989 35.4643 37.7869 36.0864 37.278 36.514C38.0837 37.175 38.1686 38.3023 37.5324 39.0798L37.7445 39.1575C37.8294 38.8077 38.0837 38.4967 38.4654 38.3412C38.8048 38.1467 39.2289 38.108 39.6105 38.2245C39.6529 37.3693 40.4162 36.7085 41.307 36.7085C41.01 36.1642 41.01 35.6199 41.1797 35.1534ZM34.479 33.9872C33.8853 34.6869 33.9701 35.6977 34.6486 36.3197C33.8428 36.8639 33.5459 37.8747 33.9277 38.691C32.5704 38.9244 31.6799 40.0906 31.892 41.3345C30.8742 41.1014 29.729 41.6068 29.4322 42.5787C29.0082 42.2676 28.4992 42.1122 27.9479 42.1899C27.439 42.2676 26.9725 42.5398 26.6757 42.9674C26.1668 42.2676 25.1913 42.0344 24.3855 42.462C24.3006 42.0733 24.0462 41.7622 23.707 41.5679C23.3676 41.3734 22.9011 41.3345 22.5195 41.4512V41.4901L22.477 41.0625C23.3252 40.9458 24.0462 40.3628 24.2159 39.5852C24.5552 39.7018 24.8944 39.7018 25.2336 39.6629C26.2939 39.5075 26.9725 38.6134 26.8028 37.6415C27.3117 37.6415 27.8631 37.447 28.2023 37.0972C28.5841 36.7085 28.7112 36.2031 28.6264 35.7366C28.6264 35.5519 28.5734 35.4404 28.5091 35.3057C28.4921 35.27 28.4745 35.2329 28.4568 35.1923C28.9657 35.0756 29.3474 34.7258 29.4747 34.2592C29.6018 33.7927 29.4322 33.2873 29.0506 32.9764C29.2201 32.8986 29.3474 32.7432 29.4747 32.5876C29.8563 32.0434 29.6442 31.3437 29.0506 30.9938L29.1353 30.916C29.3898 30.6049 29.3898 30.1773 29.0506 29.9052C29.4322 29.7108 29.7715 29.4387 29.9836 29.0889C30.1531 29.2443 30.4077 29.3221 30.662 29.2832C30.662 29.6721 30.8317 30.0219 31.171 30.2551C31.5104 30.4884 31.9768 30.5662 32.3585 30.4495V30.4884C32.3161 31.0326 32.6977 31.5768 33.3339 31.7324L33.5883 31.8102C33.3763 32.2378 33.3339 32.7043 33.5036 33.093C33.6731 33.4818 34.0124 33.8316 34.479 33.9872Z"/>
                </g>
                <defs>
                    <clipPath id="clip0_34_155">
                    <rect width="56" height="56"/>
                </clipPath>
                </defs>
            </svg>

        </a>
    )    
}

export default Icons