import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "ru",
  fallbackLocale: "kz",
  messages: {
    ru: {
      headerWhatForLinkText: "Зачем мне это",
      headerHowLinkText: "Как это проходит",
      headerAboutCourseLinkText: "О курсе",
      headerAboutEndingLinkText: "В конце курса",
      headerLoginButtonText: "Войти",

      welcomeTitleFirst: "Не откладывай.",
      welcomeTitleSecond: "Программируй.",
      welcomeDescriptionText:
        "Хватит откладывать на бесконечно завтрашний день. Освой одну из самых востребованных профессий нашего века прямо сейчас!",
      welcomeButtonText: "Перейти к курсам",

      whatForTitle: "Зачем мне это?",
      whatForDescription:
        "Сегодня программисты (веб разработчики) являются одними из самых востребованых специалистов во всем мире. Не верите? Взгляните на несколько примеров вакансий на популярном сервисе поиска работы Head Hunter",

      howTitle: "Как это проходит?",
      howFirstCardTitle: "Авторизуйтесь",
      howFirstCardDescription:
        "Войдите в аккаунт или создайте новый аккаунт. Всего 2 минуты и вы в деле!",
      howSecondCardTitle: "Пройдите курс",
      howSecondCardDescription:
        "Выберите подходящий для вас курс и пройдите веселые, интерактивные уроки",
      howThirdCardTitle: "Станьте программистом",
      howThirdCardDescription:
        "Используйте полученные навыки, чтобы получить работу востребованного разработчика",

      aboutCourseTitle: "Как проходит курс?",
      aboutCourseDescription:
        "Курс будет проходить на нашей онлайн интерактивной платформе. Что значит интерактивный? Это значит, что вы будете писать код прямо в браузере, а проверять вас будет не учитель, а специальные автоматические тесты",
      aboutEndingTitle: "Что вы получите в конце?",
      aboutEndingDescription:
        "По окончанию курса вы получите базовые навыки веб-разработчика, сертификат об окончании обучения и напишите свой первый одностраничный сайт!",

      footerWhatForLinkText: "Зачем мне это",
      footerHowLinkText: "Как это проходит",
      footerAboutCourseLinkText: "О курсе",
      footerAboutEndingLinkText: "В конце курса",
      footerUpButton: "Наверх",
      footerStartLearningButton: "Начать обучение",

      authLoginTitle: "Войти",
      authLoginButtonText: "Вход",
      authLoginNoAccountText: "Нет аккаунта?",
      authLoginRegisterText: "Зарегестрируйтесь",
      authRegisterTitle: "Регистрация",
      authInputEmail: "Почта",
      authInputPassword: "Пароль",
      authInputFirstName: "Имя",
      authInputLastName: "Фамилия",
      authInputConfirmPassword: "Подтверждение пароля",
      authRegisterButtonText: "Регистрация",
      authRegisterHaveAccountText: "Есть аккаунт?",
      authRegisterLoginText: "Войдите",

      appNavigationHome: "Главная",
      appNavigationCourses: "Курсы",
      appNavigationTests: "Тесты",
      appNavigationTrainer: "Тренажер",

      profileTitle: "Профиль",
      profileFirstName: "Имя",
      profileLastName: "Фамилия",
      profileEmail: "Почта",
      profileChangePasswordText: "Изменить пароль",
      profileSaveButtonText: "Сохранить",

      changePasswordTitle: "Изменение пароля",
      changePasswordCurrentPassword: "Текущий пароль",
      changePasswordNewPassword: "Новый пароль",
      changePasswordConfirmPassword: "Подтверждение нового пароля",
      changePasswordSaveButton: "Изменить пароль",

      noAccountHeading: "Создайте аккаунт",
      noAccountDescription:
        "Для того чтобы воспользоваться полным функционалом Crepiks Academy вы должны войти в аккаунт или создать его, если у вас его нету",
      noAccountPushButtonText: "Войти в аккаунт",
      noAccountCancelButtonText: "Позже",

      courseInfoTitle: "Научись создавать сайты по цене чашки кофе!",
      courseInfoDescription:
        "Получи доступ к курсу базовой верстки и за 2 недели создай свой собственный одностраничный сайт по цене чашки кофе",
      courseInfoButtonText: "Попробовать",

      trainerInfoTitle: "Время тренироваться!",
      trainerInfoDescription:
        "Совсем скоро у вас появится возможность прокачать свои навыки программирования в тренажёре",
      trainerInfoButtonText: "Подробнее",

      testInfoTitle: "Узнай свой уровень программирования!",
      testInfoDescription:
        "Совсем скоро вы сможете воспользоваться интерактивными тестами",
      testInfoButtonText: "Подробнее",

      courseCardButtonText: "Перейти к курсу",
      courseCardSoonText: "Скоро появиться",
      courseCardHoverText: "Наведите курсор",
      courseCardComplexityText: "Сложность",
      courseCardDurationText: "Длительность",
      courseCardPriceText: "Стоимость",
      courseCardComplexityDataText: "Простой",
      courseCardDurationDataText: "20 часов",
      courseCardPriceDataText: "2000 тг",

      coursesWelcomeTitle: "Подбери идеальный курс для себя!",
      coursesWelcomeDescription:
        "Приобрети навыки востребованного разработчика с помощью веселых интерактивных курсов. Попробуй востребованную новинку этого месяца - курс «Базовый HTML & CSS» и создай свой первый одностраничный сайт за 2 недели",

      lessonCardButtonText: "К уроку",

      firstCourseTitle: "Курс «Базовый HTML & CSS»",
      firstCourseDescription:
        "На этом курсе вы узнаете как создаются сайты, изучите основы одной из самых востребованных профессий мира и в конце создадите свой собственный одностраничный сайт",
      firstCourseButtonText: "Начать обучение",
      firstCourseLessonText1: "Приветствие",
      firstCourseLessonText2: "Как создаются сайты",
      firstCourseLessonText3: "Первый HTML",
      firstCourseLessonText4: "Первый CSS",
      firstCourseLessonText5: "Первый сайт",
      firstCourseLessonText6: "Что такое HTML",
      firstCourseLessonText7: "Теги HTML",
      firstCourseLessonText8: "Заголовок",
      firstCourseLessonText9: "Параграф",
      firstCourseLessonText10: "Изображения",
      firstCourseLessonText11: "Атрибуты тегов",
      firstCourseLessonText12: "Ссылка",
      firstCourseLessonText13: "Комментарии",
      firstCourseLessonText14: "Структура html файла",
      firstCourseLessonText15: "Вложенность",
      firstCourseLessonText16: "Что такое CSS",
      firstCourseLessonText17: "Связь CSS с HTML",
      firstCourseLessonText18: "CSS правила",
      firstCourseLessonText19: "Виды селекторов",
      firstCourseLessonText20: "Что такое классы",
      firstCourseLessonText21: "Существуют разные правила",
      firstCourseLessonText22: "Базовая анимация",
      firstCourseLessonText23: "Финальный проект",
      firstCourseLessonText24: "Структура страницы",
      firstCourseLessonText25: "Разметка страницы",
      firstCourseLessonText26: "Позиционирование",
      firstCourseLessonText27: "Основные стили",
      firstCourseLessonText28: "Анимируем элемент",
      firstCourseLessonText29: "Сдача проекта",

      firstCourseCardTitle: "Базовый HTML & CSS",
      firstCourseCardDescription:
        "На этом курсе вы познаете азы веб-разработки и создадите собственный одностраничный сайт",

      secondCourseCardTitle: "Базовый JavaScript",
      secondCourseCardDescription:
        "На этом курсе вы изучите один из самых важных и популярных языков программирования - JavaScript"
    },
    kz: {
      headerWhatForLinkText: "Бұл маған не үшін қажет",
      headerHowLinkText: "Қалай өтеді",
      headerAboutCourseLinkText: "Курс туралы",
      headerAboutEndingLinkText: "Курс соңында",
      headerLoginButtonText: "Кіру",

      welcomeTitleFirst: "Кешіктірме.",
      welcomeTitleSecond: "Бағдарлама.",
      welcomeDescriptionText:
        "Шексіз ертеңгі күнге қалдыруды тоқтатыңыз. 21 ғасырдың ең жоғары сұранысқа ие мамандықтардың бірін дәл қазір меңгеріңіз!",
      welcomeButtonText: "Курстарға барыңыз",

      whatForTitle: "Бұл маған не үшін қажет?",
      whatForDescription:
        "Бүгінгі таңда бағдарламашылар (веб-әзірлеушілер) әлемдегі ең танымал мамандардың бірі болып табылады. Сенбейсіз бе? Танымал Head Hunter жұмыс іздеу сервисіндегі вакансиялардың бірнеше мысалын қараңыз",

      howTitle: "Бұл қалай болады?",
      howFirstCardTitle: "Авторизациядан өтіңіз",
      howFirstCardDescription:
        "Аккаунтқа кіріңіз немесе жаңасын құрыңыз. Небәрі 2 минут және барлығы дайын!",
      howSecondCardTitle: "Курсты өтіңіз",
      howSecondCardDescription:
        "Өзіңізге сәйкес курсты таңдап, көңілді әрі интерактивті сабақтарды өтіңіз",
      howThirdCardTitle: "Бағдарламашы болыңыз",
      howThirdCardDescription:
        "Сұранысқа ие әзірлеуші ретінде жұмысқа орналасу үшін меңгерілген дағдыларыңызды пайдаланыңыз ",

      aboutCourseTitle: "Курс қалай өтеді?",
      aboutCourseDescription:
        "Курс біздің онлайн интерактивті платформамызда өтеді. Интерактивті дегеніміз не? Бұл сіз кодты тікелей браузерда жазатындығыңызды білдіреді, ал сізді болса мұғалім емес, арнайы автоматты тесттер тексеретін болады",
      aboutEndingTitle: "Соңында не аласыз?",
      aboutEndingDescription:
        "Курсты аяқтағаннан кейін сіз веб-әзірлеушінің негізгі дағдыларын, курсы аяқтау жөніндегі куәлікті аласыз және алғашқы бір беттік веб-сайтыңызды құрасыз!",

      footerWhatForLinkText: "Бұл маған не үшін қажет",
      footerHowLinkText: "Бұл қалай болады",
      footerAboutCourseLinkText: "Курс қалай өтеді",
      footerAboutEndingLinkText: "Соңында не аласыз",
      footerUpButton: "Жоғарыға",
      footerStartLearningButton: "Оқуды бастау",

      authLoginTitle: "Кіру",
      authLoginButtonText: "Кіру",
      authLoginNoAccountText: "Есептік жазбаңыз жоқ па?",
      authLoginRegisterText: "Тіркеліңіз",
      authRegisterTitle: "Тіркелу",
      authInputEmail: "Пошта",
      authInputPassword: "Құпия сөз",
      authInputFirstName: "Аты",
      authInputLastName: "Тегі",
      authInputConfirmPassword: "Құпия сөзді растау",
      authRegisterButtonText: "Тіркелу",
      authRegisterHaveAccountText: "Есептік жазба бар ма?",
      authRegisterLoginText: "Кіріңіз",

      appNavigationHome: "Басты бет",
      appNavigationCourses: "Курстар",
      appNavigationTests: "Тесттер",
      appNavigationTrainer: "Тренажер",

      profileTitle: "Профиль",
      profileFirstName: "Аты",
      profileLastName: "Тегі",
      profileEmail: "Пошта",
      profileChangePasswordText: "Құпия сөзді өзгерту",
      profileSaveButtonText: "Сақтау",

      changePasswordTitle: "Құпия сөздің өзгеруі",
      changePasswordCurrentPassword: "Қазіргі құпия сөз",
      changePasswordNewPassword: "Жаңа құпия сөз",
      changePasswordConfirmPassword: "Жаңа құпия сөзді растау",
      changePasswordSaveButton: "Құпия сөзді өзгерту",

      noAccountHeading: "Тіркелгі жасаңыз",
      noAccountDescription:
        "Crepiks Academy-дің толық функционалдығын пайдалану үшін, сіз тіркелгіге кіруіңіз керек немесе егер сізде тіркелгі жоқ болса, оны жасауыңыз керек",
      noAccountPushButtonText: "Тіркеліңге кіру",
      noAccountCancelButtonText: "Кейінірек",

      courseInfoTitle: "Бір кесе кофенің бағасы бойынша сайттар құруды үйрен!",
      courseInfoDescription:
        "Базалық беттеу курсына қолжетімділік ал және 2 апта ішінде өз бір беттік сайтыңды бір кесе кофе бағасымен жаса",
      courseInfoButtonText: "Көру",

      trainerInfoTitle: "Жаттығу уақыты келді!",
      trainerInfoDescription:
        "Жақында сіз тренажерде бағдарламалау дағдыларын жетілдіруге мүмкіндік аласыз",
      trainerInfoButtonText: "Толығырақ",

      testInfoTitle: "Бағдарламалау деңгейіңізді біліңіз!",
      testInfoDescription:
        "Жақын арада сіз интерактивті тесттерді пайдалана аласыз",
      testInfoButtonText: "Толығырақ",

      courseCardButtonText: "Курсқа өту",
      courseCardSoonText: "Жақында",
      courseCardHoverText: "Меңзерді апарыңыз",
      courseCardComplexityText: "Күрделілігі",
      courseCardDurationText: "Ұзақтығы",
      courseCardPriceText: "Құны",
      courseCardComplexityDataText: "Қарапайым",
      courseCardDurationDataText: "20 сағат",
      courseCardPriceDataText: "2000 тг",

      coursesWelcomeTitle: "Өзіңіз үшін керемет курсты таңдаңыз!",
      coursesWelcomeDescription:
        "Қызықты интерактивті курстар арқылы сұранысқа ие әзірлеуші дағдыларын игеріңіз. Осы айда сұранысқа ие жаңа өнімді - «базалық HTML & CSS» курсын байқап көр және 2 апта ішінде өзіңіздің бірінші бір беттік сайтыңызды құр",

      lessonCardButtonText: "Сабаққа",

      firstCourseTitle: "«Негізгі HTML & CSS» курсы",
      firstCourseDescription:
        "Бұл курста сіз веб-сайттардың қалай құрылатынын, әлемдегі ең көп ізденетін мамандықтардың негізін біліп, соңында жеке жеке веб-сайт құруды үйренесіз",
      firstCourseButtonText: "Оқуды бастау",
      firstCourseLessonText1: "Сәлемдесу",
      firstCourseLessonText2: "Сайттар қалай құрылады",
      firstCourseLessonText3: "Алғашқы HTML",
      firstCourseLessonText4: "Алғашқы CSS",
      firstCourseLessonText5: "Алғашқы сайт",
      firstCourseLessonText6: "HTML дегеніміз не",
      firstCourseLessonText7: "HTML тегтері",
      firstCourseLessonText8: "Тақырып",
      firstCourseLessonText9: "Параграф",
      firstCourseLessonText10: "Суреттер",
      firstCourseLessonText11: "Тег атрибуттары",
      firstCourseLessonText12: "Сілтеме",
      firstCourseLessonText13: "Комментарийлер",
      firstCourseLessonText14: "HTML файл құрылымы",
      firstCourseLessonText15: "Тіркеме",
      firstCourseLessonText16: "CSS дегеніміз не",
      firstCourseLessonText17: "CSS-ті HTML- ға байланыстыру",
      firstCourseLessonText18: "CSS ережелері",
      firstCourseLessonText19: "Селекторлардың түрлері",
      firstCourseLessonText20: "Сыныптар дегеніміз не",
      firstCourseLessonText21: "Әр түрлі ережелер бар",
      firstCourseLessonText22: "Негізгі анимация",
      firstCourseLessonText23: "Қорытынды жоба",
      firstCourseLessonText24: "Бет құрылымы",
      firstCourseLessonText25: "Беттің қаңқасы",
      firstCourseLessonText26: "Жайғасым",
      firstCourseLessonText27: "Негізгі стильдер",
      firstCourseLessonText28: "Элементтерді анимациялау",
      firstCourseLessonText29: "Жобаны тапсыру",

      firstCourseCardTitle: "Негізгі HTML & CSS",
      firstCourseCardDescription:
        "Бұл курста сіз веб-дамудың негіздерін білесіз және өзіңіздің жеке веб-сайтыңызды жасайсыз",

      secondCourseCardTitle: "Негізгі JavaScript",
      secondCourseCardDescription:
        "Бұл курста сіз ең маңызды және танымал бағдарламалау тілдерінің бірін - JavaScript-ті үйренесіз"
    },
    en: {
      headerWhatForLinkText: "Why do I need this",
      headerHowLinkText: "How that goes",
      headerAboutCourseLinkText: "About course",
      headerAboutEndingLinkText: "In the end",
      headerLoginButtonText: "Login",

      welcomeTitleFirst: "Don’t postpone.",
      welcomeTitleSecond: "Start coding.",
      welcomeDescriptionText:
        "Stop postponing indefinitely the next day. Learn one of the most popular professions of our century right now!",
      welcomeButtonText: "Go to the courses",

      whatForTitle: "Why do I need this?",
      whatForDescription:
        "Today, programmers (web developers) are one of the most popular specialists in the world. Don't you believe me? Take a look at some examples of vacancies on the popular job search service Headhunter",

      howTitle: "How that goes?",
      howFirstCardTitle: "Authorize",
      howFirstCardDescription:
        "Log in to your account or create a new one. Just 2 minutes and you're in!",
      howSecondCardTitle: "Take a course",
      howSecondCardDescription:
        "Choose the right course for you and take fun, interactive lessons",
      howThirdCardTitle: "Become a programmer",
      howThirdCardDescription:
        "Use your skills to get a job as a high-demand developer ",

      aboutCourseTitle: "How is the course going?",
      aboutCourseDescription:
        "The course will be held on our online interactive platform. What does interactive mean? This means that you will write code directly in the browser, and you will be tested not by a teacher, but by special automatic tests",
      aboutEndingTitle: "What will you get at the end?",
      aboutEndingDescription:
        "At the end of the course, you will receive basic web developer skills, a certificate of completion, and write your first one-page website!",

      footerWhatForLinkText: "Why do I need this",
      footerHowLinkText: "How that goes",
      footerAboutCourseLinkText: "About course",
      footerAboutEndingLinkText: "In the end",
      footerUpButton: "Go to up",
      footerStartLearningButton: "Start training",

      authLoginTitle: "Login",
      authLoginButtonText: "Log in",
      authLoginNoAccountText: "No account?",
      authLoginRegisterText: "Create it",
      authRegisterTitle: "Registration",
      authInputEmail: "Email",
      authInputPassword: "Password",
      authInputFirstName: "First name",
      authInputLastName: "Last name",
      authInputConfirmPassword: "Confirm password",
      authRegisterButtonText: "Create account",
      authRegisterHaveAccountText: "Have an account?",
      authRegisterLoginText: "Sign in",

      appNavigationHome: "Home",
      appNavigationCourses: "Courses",
      appNavigationTests: "Tests",
      appNavigationTrainer: "Trainer",

      profileTitle: "Profile",
      profileFirstName: "First name",
      profileLastName: "Last name",
      profileEmail: "Email",
      profileChangePasswordText: "Change password",
      profileSaveButtonText: "Save",

      changePasswordTitle: "Password change",
      changePasswordCurrentPassword: "Current password",
      changePasswordNewPassword: "New password",
      changePasswordConfirmPassword: "Confirm new password",
      changePasswordSaveButton: "Change password",

      noAccountHeading: "Create an account",
      noAccountDescription:
        "To use the full functionality of Crepiks Academy, you must log in to your account or create one if you don't have it yet",
      noAccountPushButtonText: "Log in to your account",
      noAccountCancelButtonText: "Later",

      courseInfoTitle:
        "Learn how to create websites for the price of a Cup of coffee!",
      courseInfoDescription:
        "Get access to the basic markup course and create your own one-page website for the price of a Cup of coffee in 2 weeks",
      courseInfoButtonText: "Try it",

      trainerInfoTitle: "Time to train!",
      trainerInfoDescription:
        "Very soon you will have the opportunity to improve your programming skills in the simulator",
      trainerInfoButtonText: "More",

      testInfoTitle: "Find out your level of programming!",
      testInfoDescription:
        "Very soon you will be able to use interactive tests to find out your level of programming",
      testInfoButtonText: "More",

      courseCardButtonText: "Go to the course",
      courseCardSoonText: "Soon appear",
      courseCardHoverText: "Move the cursor",
      courseCardComplexityText: "Complexity",
      courseCardDurationText: "Duration",
      courseCardPriceText: "Price",
      courseCardComplexityDataText: "Simple",
      courseCardDurationDataText: "20 hours",
      courseCardPriceDataText: "2000 tg",

      coursesWelcomeTitle: "Choose the perfect course for yourself!",
      coursesWelcomeDescription:
        "Learn the skills of a sought-after developer with fun interactive courses. Try this month's popular novelty - the course «Basic HTML & CSS» and create your first one-page website in 2 weeks",

      lessonCardButtonText: "To the lesson",

      firstCourseTitle: "Course «Basic HTML & CSS»",
      firstCourseDescription:
        "In this course, you will learn how to create websites, learn the basics of one of the most popular professions in the world, and finally create your own one-page website",
      firstCourseButtonText: "Start training",
      firstCourseLessonText1: "Greeting",
      firstCourseLessonText2: "How sites are created",
      firstCourseLessonText3: "First HTML",
      firstCourseLessonText4: "First CSS",
      firstCourseLessonText5: "First site",
      firstCourseLessonText6: "What is HTML",
      firstCourseLessonText7: "HTML tags",
      firstCourseLessonText8: "Heading",
      firstCourseLessonText9: "Paragraph",
      firstCourseLessonText10: "Images",
      firstCourseLessonText11: "Attributes of the tags",
      firstCourseLessonText12: "Link",
      firstCourseLessonText13: "Comments",
      firstCourseLessonText14: "Structure of the HTML file",
      firstCourseLessonText15: "Nesting",
      firstCourseLessonText16: "What is CSS",
      firstCourseLessonText17: "Linking CSS to HTML",
      firstCourseLessonText18: "CSS rules",
      firstCourseLessonText19: "Types of selectors",
      firstCourseLessonText20: "What are classes",
      firstCourseLessonText21: "There are different rules",
      firstCourseLessonText22: "Basic animation",
      firstCourseLessonText23: "Final project",
      firstCourseLessonText24: "Structure of the page",
      firstCourseLessonText25: "Page layoutы",
      firstCourseLessonText26: "Positioning",
      firstCourseLessonText27: "The main styles",
      firstCourseLessonText28: "Animating elements",
      firstCourseLessonText29: "Delivery of the project",

      firstCourseCardTitle: "Basic HTML & CSS",
      firstCourseCardDescription:
        "In this course, you will learn the basics of web development and create your own one-page website",

      secondCourseCardTitle: "Basic JavaScript",
      secondCourseCardDescription:
        "In this course, you will learn one of the most important and popular programming languages - JavaScript"
    }
  }
});
