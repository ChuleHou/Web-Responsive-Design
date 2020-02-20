;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-twitter" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1024C794.770286 1024 1024 794.770286 1024 512 1024 229.229714 794.770286 0 512 0 229.229714 0 0 229.229714 0 512 0 794.770286 229.229714 1024 512 1024L512 1024ZM361.508571 380.854857C459.922286 430.555429 543.122286 427.702857 543.122286 427.702857 543.122286 427.702857 511.597714 317.805714 609.060571 269.056 706.56 220.306286 773.632 302.482286 773.632 302.482286 773.632 302.482286 790.637714 297.801143 803.328 293.156571 815.981714 288.475429 834.304 280.137143 834.304 280.137143L804.278857 333.750857 850.541714 328.850286C850.541714 328.850286 844.836571 337.188571 826.331429 354.194286 807.826286 371.163429 800.182857 379.904 800.182857 379.904 800.182857 379.904 806.802286 512.219429 737.097143 614.070857 667.392 715.922286 577.353143 777.069714 446.573714 789.942857 315.757714 802.779429 230.546286 749.787429 230.546286 749.787429 230.546286 749.787429 287.780571 746.532571 324.242286 732.598857 360.667429 718.665143 413.110857 681.947429 413.110857 681.947429 413.110857 681.947429 338.578286 658.980571 311.808 633.197714 285.037714 607.378286 278.345143 592.091429 278.345143 592.091429L351.926857 591.140571C351.926857 591.140571 274.505143 550.034286 252.525714 517.558857 230.546286 485.046857 227.693714 453.522286 227.693714 453.522286L284.269714 476.342857C284.269714 476.342857 237.238857 412.416 230.546286 362.715429 223.853714 313.014857 239.177143 286.244571 239.177143 286.244571 239.177143 286.244571 263.058286 331.154286 361.508571 380.854857L361.508571 380.854857Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mail" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.1 0C229.2 0 0 229.2 0 512c0 282.8 229.2 512 512.1 512 282.7 0 511.9-229.2 511.9-512C1024 229.2 794.7 0 512.1 0zM297.4 333.2l429.3 0c1.3 0 2.3 0.6 3.6 0.7L508.9 555.2 288.6 334.9C291.5 334.2 294.3 333.2 297.4 333.2zM762.4 655.1c0 19.8-16 35.8-35.8 35.8L297.4 690.9c-19.7 0-35.8-16-35.8-35.8L261.6 368.9c0-3.1 1.1-5.9 1.7-8.8l233 233c3.4 3.4 7.9 5.2 12.7 5.2 4.7 0 9.3-1.9 12.7-5.2l238-238.1c1.7 4.3 2.8 8.9 2.8 13.9L762.5 655.1 762.4 655.1z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-facebook" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.000008 0c-282.743798 0-512 229.226102-512 512.01505 0 282.743798 229.241152 511.98495 512 511.98495 282.773898 0 511.98495-229.226102 511.98495-511.98495 0-282.834098-229.226102-512.01505-511.98495-512.01505z m132.349441 511.92475l-83.918636 0.0602-0.0602 307.2h-115.117225V511.98495h-76.8v-105.846443l76.8-0.0602-0.120399-62.352028c0-86.416931 23.417754-138.941329 125.110405-138.941329h84.746385v105.906643h-52.990947c-39.626573 0-41.568019 14.794121-41.568019 42.365667l-0.120399 52.990947h95.266314l-11.227279 105.876543z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziyuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.255011 0 0.017153 229.226422 0.017153 512.005718s229.237858 511.994282 511.982847 511.994282S1023.982847 794.773578 1023.982847 512.005718 794.790731 0 512 0zM365.704484 757.722263h-115.956893V372.548685h115.956893z m-58.744631-432.391133c-36.593891 0-60.997443-26.805025-60.231258-59.86532-0.766185-34.672712 23.637367-60.608633 61.020313-60.608632s61.020314 25.993098 61.752192 60.608632c0.034307 33.003116-24.403551 59.865319-62.541247 59.86532z m505.716142 432.436875H696.741973V544.334134c0-49.61903-16.741705-83.479815-58.72176-83.479815-32.019655 0-51.094221 22.871182-58.744631 44.89613-3.041867 7.090066-4.574236 18.914468-4.574236 29.926942v222.090614H458.790195V495.446982c0-48.029482-1.532369-88.99177-3.064739-122.898297h100.633202l5.340421 52.775253h2.287118c15.266514-24.38068 53.415646-61.420559 115.179273-61.42056 76.309699 0 133.476219 51.997632 133.476219 165.42726z"  ></path>' +
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