// Love messages array
const loveMessages = [
    "بحبك بكل دقة من دقات قلبي ❤️",
    "إنتِ مش بس حب... إنتِ حياة 🌹",
    "كل يوم أحبك أكتر من اللي فات 🌟",
    "قلبي بيتكلم عنك كل يوم 💝",
    "إنتِ أجمل حاجة في حياتي 🌸",
    "بحبك أكتر من أي حاجة في الدنيا 💖",
    "إنتِ حبيبتي وروحي وقلبي 🥰",
    "كل يوم معاكِ هو يوم سعادة 🌺",
    "بحبك أكتر من الشمس والقمر ⭐",
    "إنتِ حبيبتي وكل حياتي 💕",
"بحبك من هنا للسما وراجع 💘",  
"عيونك وطن، وأنا الغريب اللي لقى نفسه فيه 🌍",  
"والله لو خيروني بينك وبين العالم، أختارك وانساه 💗",  
"دُفئك مش بس بيحضني، ده بيحييني 🌞",  
"إنتي مش بس جميلة.. إنتي أجمل مما توصفه الكلمات 💖",  
"إنتي مش حلم.. إنتي الواقع الحلو اللي كنت بستناه 💭",  
"نفسي كل الليلة تبقى جنبك 💫",  
"بحبك، وخلاص. والباقي تفاصيل ❤️",  
"إنتي مش بس حب، إنتي حياة 💓",  
"لما بشوفك، بنسى الدنيا كلها 🌸",  
"إيدي في إيدك = سلام وحنية 🌼",  
"اشتقتلك كأني ما شفتك من سنين 💔",  
"قلبك دفا، حضنك وطن، صوتك أمان 🫂",  
"بحبك على طريقتي.. بكل جنوني 💃",  
"لو كنتِ كتاب، كنت قريتك طول عمري 📖❤️",  
"كل حاجة حلوة فيا بدأت من لما عرفتك 💗",  
"يا أول حب وآخر أمل 💌",  
"وجودك بيغير شكل يومي بالكامل 🌅",  
"كل مرة بتضحكي.. قلبي بيرقص 💃🕺",  
"بحبك بعدد نجوم السما 💫",  
"أول ما شفتك، قلبي قال \"هي دي\" 💘",  
"ما لقتش كلام يوصف إحساسي بيكي 😍",  
"اسمك في قلبي، مش بس في لساني 💬❤️",  
"عايز أعيش فيك، مش جنبك بس 🏡",  
"بحبك مش علشان إنتي كاملة.. بحبك علشان إنتي إنتي 💖",  
"ساعات بحس إني محظوظ أكتر من اللازم، علشان إنتي معايا 💎",  
"عمري ما حلمت بحب كده، بس جيتي وحققتيه 💞",  
"كلامك دوا، ونظرتك شفا ❤️‍🩹",  
"إنتي الراحة في آخر كل تعب 💆‍♂️",  
"صوتك نغمة حب بتسكن قلبي 🎶",  
"مافيش أجمل من حضنك وقت الزعل 🫂",  
"والله بحبك حب مش طبيعي 💥",  
"بحبك بكل اللغات.. بس أكتر بلغة قلبي ❤️",  
"إنتي الهداوة وقت الدوشة، والحنية وقت القسوة 🌿",  
"أول مرة شفتك حسيت إني عايز أبقى أحسن عشاني وعشانك 💪",  
"ضحكتك بتصحيني، ونظرتك بترجعني طفل 👶💗",  
"إنتي مش بس جميلة، إنتي ملاك 🌸",  
"لو كان ليا دعوة مستجابة، هدعي تفضلي في حياتي على طول 🙏",  
"بحبك يا أجمل ما في دنيتي 💐",  
"معاك الحياة طعمها تاني 🍯",  
"أنا جنبك دايمًا.. حتى من غير كلام 🤝",  
"قلبي مش بينبض إلا لما تكوني معايا 💓",  
"بحبك لأنك أنتي.. ببساطتك، بضحكتك، بكل حاجة 💘",  
"لما بسمع صوتك، بحس إن الدنيا وقفت تستمتع ❤️",  
"نفسي اللحظة دي ماتخلصش وإنتي جنبي ⏳",  
"إنتي الطمأنينة اللي كنت بدور عليها 😌",  
"شكلي بحبك أكتر من المفروض 😂❤️",  
"مافيش في الكون شبهك 🌷",  
"جمالك مش بس في شكلك، جمالك جواكي ✨",  
"إنتي وردة وسط صحراء قلبي 🌹",  
"بحب التفاصيل اللي فيكي، حتى اللي محدش بياخد باله منها 💌",  
"محتاجك أكتر ما بتتصوري 💭",  
"كل مرة أفتكرك.. ببتسم بدون سبب 😊",  
"لو الدنيا كلها وقفت ضدي، هفضل واقف جمبك 💪❤️",  
"بحبك.. حتى لما بكون ساكت 👀",  
"بحبك لما تزعلي، وتتكلمي بطفولة 🧸",  
"صوتك بيغنيلي لحن خاص بيا أنا 🎵",  
"قربك أمان، بعدك وجع 💔",  
"كل لحظة من غيرك ناقصة 💔",  
"لما ببص في عيونك.. الدنيا بتبقى بخير 👁️‍🗨️",  
"كلامك بيريّح قلبي ❤️‍🩹",  
"إنتي مش بس نصي التاني.. إنتي الكل 💯",  
"بحبك فوق ما تتخيلي 🥰",  
"إنتي أول تفكيري كل يوم، وآخر دعوة قبل ما أنام 😴❤️",  
"حبك بيكبر جوايا كل لحظة 💗",  
"نفسي أعيش العمر كله في حضنك 🛏️",  
"لما بشم ريحتك بحس إني في الجنة 💐",  
"بحبك حتى في زعلك 😅",  
"والله ما تخيلت أعيش يوم من غيرك 🙅‍♂️",  
"وجودك بيكملني 💖",  
"نفسي أخدك وأهرب بيكي بعيد عن العالم كله 🌍",  
"بحبك بصوت واطي.. بس بإحساس عالي جدًا 🔊❤️",  
"معاك بحس إني طفل صغير ومرتاح 👶💓",  
"حبك بيخليني أحلم وأعيش 💭",  
"صورتك محفورة في قلبي 🖼️",  
"لو سألتيني: \"قد إيه بتحبني؟\".. هقولك \"قد ما بتنفس\" 💨",  
"بتمنالك السعادة أكتر من ما بتمناها لنفسي 🌈",  
"نفسي آخدك كل يوم فسحة جوا قلبي 🧡",  
"لما بتمسكي إيدي.. الدنيا بتهدى 🤲",  
"بحبك حب ملوش منطق، بس ليه قلب 💘",  
"يومك حلو؟ لأني دعيتلك من قلبي 💬",  
"بحبك.. واللي جاي أحلى مع بعض 💞",  
"ضحكتك بتطمن قلبي ❤️",  
"عينيك مش بس جميلة.. دي بتحكيلي حاجات كتير 👁️",  
"في وجودك.. الوقت بيجري وأنا مش عايز اللحظة تخلص ⏱️",  
"أول ما تصحي، افتكري إن في حد بيحبك جدًا 🥱❤️",  
"حنيتك بتغلب الدنيا كلها 💗",  
"أنا جنبك في كل حاجة.. حتى لما تضعفي 💪",  
"من غيرك، الحياة طعمها باهت 💔",  
"بضحكتك بتشرق شمسي ☀️",  
"إنتي القمر اللي بينورلي ليلي 🌙",  
"والله بحبك حب عمره ما كان بالكلام بس ❤️",  
"بحبك رغم كل حاجة، وعلشان كل حاجة 💖",  
"بتمنالك يوم جميل زي قلبك 💐",  
"كل مرة بشوفك، بحس إنها أول مرة 💕",  
"إنتي السبب إني بقيت إنسان أحسن 💪",  
"صوتك دواء، وعيونك وطن، وضحكتك حياة 🎶",  
"بحبك بكل الطرق الممكنة، واللي مش ممكنة كمان ❤️‍🔥",  
"نفسي أكتبلك شعر، بس وجودك أجمل من أي كلام 📝💘",  
"بحبك.. وكل يوم بحبك أكتر 💝",
];

// Apology messages array
const apologyMessages = [
    "أعتذر من أعماق قلبي، فأنتِ أغلى ما أملك 💝",
    "أسف لأنني أزعجتكِ، فأنتِ روحي وقلبي 🌹",
    "أعتذر بكل الحب الذي في قلبي لكِ 💖",
    "أسف لأنني أخطأت في حقكِ، فأنتِ حياتي 🌸",
    "أعتذر من كل قلبي، فأنتِ أغلى من روحي 💕",
"سامحيني لو زعلتك، ماكانش قصدي أبدًا،",
"أنا آسف لو جرحتك بكلامي، ما بحبش أشوفك متضايقة،",
"بجد متأسف لو غلطت في حقك، قلبي معاك دايمًا،",
"معلش لو قصرت، بحاول أكون أحسن علشانك،",
"أنا آسف لو ما كنتش جنبي زي ما تستاهلي،",
"سامحيني لو كنت عصبيت، بحبك ومش عايز أضايقك،",
"أنا غلطت وأنا مستعد أعترف وأصلح اللي حصل،",
"بحس بالذنب لو زعلتك، نفسي نرجع زي الأول،",
"أنا آسف لو ضايقتك، كل اللي نفسيه إنك تسعدي،",
"مفيش حاجة تهمني أكتر من رضاك، سامحيني يا روحي،",
"أنا غلطت وأتمنى تسامحيني من قلبي،",
"ما كانش قصدي أزعلك، سامحيني لو جرحتك،",
"أنا آسف لو خليتك تحسي بالوحدة،",
"أنا هنا عشان أسمعك وأفهمك، سامحيني لو قصرت،",
"بحبك وديما نفسي نكون أحسن مع بعض، سامحيني يا حبّي،",
"أنا آسف لو نسيانك مشيتي في دماغي،",
"مفيش حاجة أغلى من رضاك، سامحيني لو ضايقتك،",
"أنا آسف لو كنت عنيد، بحاول أتعلم عشانك،",
"سامحيني على كل لحظة ضايقتك فيها،",
"أنا غلطت ومش هكررها، بحبك أكتر من أي حاجة،",
"أنا آسف لو كلمة واحدة جرحتك،",
"سامحيني لو ما كنتش عارف أعبر عن مشاعري صح،",
"أنا آسف لو كنت مشغول وماخدتش بالك منك،",
"بحبك وأسف لو خيبت ظنك فيا،",
"سامحيني لو أخطأت في حقك، نفسي نبدأ صفحة جديدة،",
"أنا آسف لو كنت قاسي، مش قصدي أبدًا،",
"سامحيني لو كنت بعيد عنك، قلبي معاك دايمًا،",
"أنا آسف لو ما كنتش قد توقعاتك،",
"سامحيني لو كنت زعلتك من غير قصد،",
"أنا غلطت وأتمنى تسامحيني وتديني فرصة تانية،",
];

// Floating text messages
const floatingTexts = [
    "عموري بيحبك يشوشو 💖",
    "يابنتي 💝",
    "بحبك 🥰",
    "عروستي 🌹",
    "حبيبتي ❤️",
    "روحي 💕",
    "قلبي 💗",
    "حياتي 💓",
    "نصي التاني 💘",
    "أم ريان وفراس 💞"
];

// Function to create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'heart';
    heart.style.left = Math.random() * 200 + 'px';
    heart.style.top = Math.random() * 200 + 'px';
    document.getElementById('profileImage').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Function to create floating text
function createFloatingText() {
    const text = document.createElement('div');
    text.className = 'floating-text';
    text.innerHTML = floatingTexts[Math.floor(Math.random() * floatingTexts.length)];
    text.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    text.style.top = window.innerHeight + 'px';
    document.body.appendChild(text);
    
    setTimeout(() => {
        text.remove();
    }, 3000);
}

// Add touch and hover effects to profile image
const profileImage = document.getElementById('profileImage');
let heartInterval;

function startHeartAnimation() {
    if (!heartInterval) {
        heartInterval = setInterval(createHeart, 300);
    }
}

function stopHeartAnimation() {
    if (heartInterval) {
        clearInterval(heartInterval);
        heartInterval = null;
    }
}

profileImage.addEventListener('mouseover', startHeartAnimation);
profileImage.addEventListener('mouseout', stopHeartAnimation);
profileImage.addEventListener('touchstart', startHeartAnimation);
profileImage.addEventListener('touchend', stopHeartAnimation);

// Calculate time since relationship started
function calculateTime() {
    const startDate = new Date('2022-01-19');
    const currentDate = new Date();
    
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = diffDays % 30;
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
    
    return `مر على حبنا ${years} سنة و ${months} شهر و ${days} يوم و ${hours} ساعة و ${minutes} دقيقة و ${seconds} ثانية 💖`;
}

// Show message with animation
function showMessage(message) {
    const messageBox = document.getElementById('messageBox');
    messageBox.innerHTML = `<p>${message}</p>`;
    messageBox.classList.remove('show');
    void messageBox.offsetWidth; // Trigger reflow
    messageBox.classList.add('show');
    
    // Scroll to message
    messageBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Event listeners for buttons
document.getElementById('timeButton').addEventListener('click', () => {
    showMessage(calculateTime());
});

document.getElementById('loveButton').addEventListener('click', () => {
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    showMessage(randomMessage);
});

document.getElementById('apologyButton').addEventListener('click', () => {
    const randomApology = apologyMessages[Math.floor(Math.random() * apologyMessages.length)];
    showMessage(randomApology);
});

let floatingInterval = null;

document.getElementById('reassuranceButton').addEventListener('click', () => {
    const reassuranceMessage = `بصي يحبيبي انا عايزك متقلقيش ولا تحطي ف بالك هم من اي حاجه وعايزك كمان تعرفي اني بحبك اوي اوي واني بوعدك اهو زي ما وعدتك قبل كدا اني عمري ما هسيبك ابدا وهفضل احاول عشان دايما وكمان هفضل احبك حتي لو ايه وهفضل معاكي طول عمري وحاجه كمان مش عايزك تحسي ب تقصير ابدا نحيتي انا كفايه وجودك جمبي دا الدنيا وكفايه اني كل يوم اصحي كدا تكوني انتي ف حياتي ف بجد احب اطمنك واقولك اني عمري ما زعلان منك ولا مدايق ولا اصلا هزعل ولا هدايق وخليكي عارفه وفاكرة اني انا عروسك وانتي عروستي يأم ريان وفراس وربنا يخليكي ويقدرني ويحليكي اقدر اخليكي مبسوطت دايما ي نصي التاني😭`;
    showMessage(reassuranceMessage);
    
    // Clear any existing interval
    if (floatingInterval) {
        clearInterval(floatingInterval);
    }
    
    // Start floating text animation
    floatingInterval = setInterval(createFloatingText, 500);
    
    // Stop floating text after 10 seconds
    setTimeout(() => {
        if (floatingInterval) {
            clearInterval(floatingInterval);
            floatingInterval = null;
        }
    }, 10000);
}); 