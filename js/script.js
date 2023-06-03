(()=>{
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length

    //初期化
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    //クリックイベント
    const handleClick = (e) =>{
        e.preventDefault();

        //クリックされたnavとそのデータを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        //対象外のnav,contentsを全て一旦リセットする
        let index = 0;
        while(index < navLen){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        //対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content = "' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    };

    //全nav要素に関数を適用
    let index = 0;
    while(index < navLen){
        $nav[index].addEventListener('click',(e) => handleClick(e));
        index++;
    }
})();

//アコーディオン
(() => {
    class  Accordion {
        //初期化
        constructor(obj){          
            const $elm = document.querySelector(obj.hookName)
            const $trigger = $elm.getElementsByTagName(obj.tagName);

            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen){
                $trigger[index].addEventListener('click',(e) => this.clickHandler(e));
                index++;
            }       
        }
        //クリック時の処理
        clickHandler = (e) => {
            e.preventDefault();

            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;

            if($content.style.display ===  'block'){
                $content.style.display = 'none';  
            } else {
                $content.style.display = 'block'; 
            }
        }
    }

    const fuckingAccordion = new Accordion({
        hookName: '#js-faq',
        tagName:'a'
    });
})();