$(function() {
    // 添加模块功能
    var MODULE = [];
    MODULE['headMod'] = '<div class="npf-banner-box npf-mod-wrap">' +
        '    <i class="banner-bg1 headShake1"></i>' +
        '    <i class="banner-bg2 headShake2"></i>' +
        '    <h2 class="npf-editable">云服务器 3</h2>' +
        '    <p class="text npf-editable">' +
        '        第三代服务器承载更多在线计算、大型数据处理能力，为计算密集型应用提供弹性、高效、低延迟的计算密集型云服务。新硬件加速，开启全行业计算提速。' +
        '    </p>' +
        '    <a href="https://www.qcloud.com/act/apply/CVM3" class="npf-btn npf-editable">申请内测</a>' +
        '</div>';

    MODULE['characterMod'] = '<div class="npf-products-news-box npf-mod-wrap">' +
        '  <div class="c-grid">' +
        '      <div class="c-g-6 s-12 xs-1 npf-products-wrap">' +
        '          <h3 class="npf-editable">Xeon<em>Skylake</em></h3>' +
        '          <p class="til npf-editable">Intel Skylake至强<em class="brand-text">®</em>处理器</p>' +
        '          <p class="text npf-editable">新增标准型和计算型两种CPU型号，睿频可高达3.7GHz</p>' +
        '      </div>' +
        '      <div class="c-g-6 s-12 xs-1 npf-products-wrap">' +
        '          <h3 class="npf-editable">2666<em>MT/s</em></h3>' +
        '          <p class="til npf-editable">更大的DDR4内存带宽</p>' +
        '          <p class="text npf-editable">搭配六通道内存，比上一代内存带宽提升66%</p>' +
        '      </div>' +
        '      <div class="c-g-6 s-12 xs-1 npf-products-wrap">' +
        '          <h3 class="npf-editable">AVX 512</h3>' +
        '          <p class="til npf-editable">支持最新指令集</p>' +
        '          <p class="text npf-editable">更大数据宽度处理，加速多媒体编解码、加解密数值运算</p>' +
        '      </div>' +
        '      <div class="c-g-6 s-12 xs-1 npf-products-wrap">' +
        '          <h3 class="npf-editable">150万<em>PPS</em></h3>' +
        '          <p class="til npf-editable">超高包转发能力</p>' +
        '          <p class="text npf-editable">实例的网络性能上限大幅提升，比上一代提升了4倍</p>' +
        '      </div>' +
        '  </div>' +
        '</div>';

    MODULE['performanceMod'] = '<div class="npf-product-nature-box npf-mod-wrap">' +
        '      <div class="c-grid">' +
        '          <div class="c-g-12 s-24 npf-product-nature-wrap">' +
        '              <h3 class="npf-editable">全新处理器，性能提升30%</h3>' +
        '              <p class="text npf-editable">第三代云服务器CPU采用Intel Xeon Skylake至强<em class="brand-text">®</em>处理器，新增标准型和计算型两种CPU型号，最高睿频可高达3.7GHz。 CPU性能最高可提升30%，还将加入RDT资源调配技术，满足灵活的虚拟化需求</p>' +
        '              <div class="npf-pic-editable"><img class="visible-xs" src="css/img/cpu-phone.png" alt=""/></div>' +
        '              <div class="npf-svg-editable">' +
        '              <svg class="hidden-xs" x="0px" y="0px" width="638px" height="206px" viewBox="0 0.7 638 206" enable-background="new 0 0.7 638 206">' +
        '                  <rect x="528" y="2" fill="#EBEBEB" width="1" height="142"/>' +
        '                  <text transform="matrix(1 0 0 1 511.448 163.8272)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\'" font-size="14">1.4</text>' +
        '                  <text transform="matrix(1 0 0 1 533.648 163.5332)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\'" font-size="14">亿</text>' +
        '                  <rect x="415" y="2" fill="#EBEBEB" width="1" height="142"/>' +
        '                  <text transform="matrix(1 0 0 1 394.5213 163.8272)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\'" font-size="14">1.03</text>' +
        '                  <text transform="matrix(1 0 0 1 426.1213 163.5332)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">亿</text>' +
        '                  <rect x="303" y="2" fill="#EBEBEB" width="1" height="142"/>' +
        '                  <text transform="matrix(1 0 0 1 281.1743 163.8272)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">0.70</text>' +
        '                  <text transform="matrix(1 0 0 1 312.9999 163.5332)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">亿</text>' +
        '                  <text transform="matrix(1 0 0 1 171 163.8204)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">0.35</text>' +
        '                  <text transform="matrix(1 0 0 1 202.9999 163.5264)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">亿</text>' +
        '                  <rect x="191" y="2" fill="#EBEBEB" width="1" height="142"/>' +
        '                  <text transform="matrix(1 0 0 1 27.3252 99.0191)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">单进程</text>' +
        '                  <text transform="matrix(1 0 0 1 -0.6748 115.8191)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">字符串处理</text>' +
        '                  <text transform="matrix(1 0 0 1 27.3251 41.0194)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">多进程</text>' +
        '                  <text transform="matrix(1 0 0 1 -0.6749 57.8194)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">字符串处理</text>' +
        '                  <rect x="79" y="2" fill="#EBEBEB" width="1" height="142"/>' +
        '                  <text transform="matrix(1 0 0 1 74.8943 163.8213)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">0</text>' +
        '                  <g id="cpuText1" class="fadeInBefore">' +
        '                      <text transform="matrix(1 0 0 1 550.5996 42.2246)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="24">1.4</text>' +
        '                      <text transform="matrix(1 0 0 1 588.9996 40.5049)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="24">亿</text>' +
        '                      <text transform="matrix(1 0 0 1 613.9996 42.2246)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">Lps</text>' +
        '                  </g>' +
        '                  <g id="cpuText2" class="fadeInBefore">' +
        '                      <text transform="matrix(1 0 0 1 212 100.2246)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="24">0.35</text>' +
        '                      <text transform="matrix(1 0 0 1 267.0002 98.5049)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="24">亿</text>' +
        '                      <text transform="matrix(1 0 0 1 292.0002 100.2246)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">LPS</text>' +
        '                  </g>' +
        '                  <text transform="matrix(1 0 0 1 158.725 204.4875)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">二代标准型S2</text>' +
        '                  <path fill="#C7C7C7" d="M145,197.3h6v6h-6V197.3z"/>' +
        '                  <text transform="matrix(1 0 0 1 279.7249 204.4876)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">三代标准型S3</text>' +
        '                  <path fill="#006EFF" d="M266,197.3h6v6h-6V197.3z"/>' +
        '                  <text transform="matrix(1 0 0 1 404.7249 204.487)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">三代计算型C3</text>' +
        '                  <path fill="#00A4FF" d="M391,197.3h6v6h-6V197.3z"/>' +
        '                  <line id="line1" fill="none" stroke="#00A4FF" stroke-width="8" stroke-miterlimit="10" x1="79" y1="35" x2="529" y2="35"/>' +
        '                  <line id="line2" fill="none" stroke="#006EFF" stroke-width="8" stroke-miterlimit="10" x1="79" y1="45" x2="479" y2="45"/>' +
        '                  <line id="line3" fill="none" stroke="#C7C7C7" stroke-width="8" stroke-miterlimit="10" x1="79" y1="55" x2="434" y2="55"/>' +
        '                  <line id="line4" fill="none" stroke="#00A4FF" stroke-width="8" stroke-miterlimit="10" x1="79" y1="93" x2="192" y2="93"/>' +
        '                  <line id="line5" fill="none" stroke="#006EFF" stroke-width="8" stroke-miterlimit="10" x1="79" y1="103" x2="179" y2="103"/>' +
        '                  <line id="line6" fill="none" stroke="#C7C7C7" stroke-width="8" stroke-miterlimit="10" x1="79" y1="113" x2="157" y2="113"/>' +
        '              </svg>' +
        '              </div>' +
        '              <p class="links-text" id="cpuBtn"><a href="javascript:;" class="npf-editable">进一步了解处理器</a></p>' +
        '              <div  class="npf-nature-wrap hide">' +
        '                  <div class="npf-product-nature-more">' +
        '                      <div class="npf-nature-more-wrap">' +
        '                          <div class="til npf-editable">二代处理器</div>' +
        '                          <dl>' +
        '                              <dt>E5-2680v4</dt>' +
        '                              <dd class="ml20">' +
        '                                  <p class="sub-til npf-editable">基准主频</p>' +
        '                                  <p class="sub-text npf-editable">2.4GHZ</p>' +
        '                              </dd>' +
        '                              <dd class="ml20">' +
        '                                  <p class="sub-til npf-editable">总线速度</p>' +
        '                                  <p class="sub-text npf-editable">9.6GT/s QPI</p>' +
        '                              </dd>' +
        '                              <dd class="ml20">' +
        '                                  <p class="sub-til npf-editable">支持AVX指令集</p>' +
        '                                  <p class="sub-text npf-editable">AVX2</p>' +
        '                              </dd>' +
        '                          </dl>' +
        '                      </div>' +
        '                      <div class="npf-nature-more-wrap">' +
        '                          <div class="til npf-editable">三代处理器</div>' +
        '                          <div class="two-table">' +
        '                              <dl>' +
        '                                  <dt class="npf-editable">Skylake 标准型S3</dt>' +
        '                                  <dd>' +
        '                                      <p class="sub-til npf-editable"></p>' +
        '                                      <p class="sub-text npf-editable">2.5GHZ</p>' +
        '                                  </dd>' +
        '                                  <dd>' +
        '                                      <p class="sub-til npf-editable"></p>' +
        '                                      <p class="sub-text npf-editable">9.6GT/s QPI</p>' +
        '                                  </dd>' +
        '                                  <dd>' +
        '                                      <p class="sub-til npf-editable"></p>' +
        '                                      <p class="sub-text npf-editable">AVX512</p>' +
        '                                  </dd>' +
        '                              </dl>' +
        '                              <dl>' +
        '                                  <dt class="npf-editable">Skylake 计算型C3</dt>' +
        '                                  <dd class="mr20">' +
        '                                      <p class="sub-til npf-editable"></p>' +
        '                                      <p class="sub-text npf-editable">3.2GHZ</p>' +
        '                                  </dd>' +
        '                                  <dd class="mr20">' +
        '                                      <p class="sub-til npf-editable"></p>' +
        '                                      <p class="sub-text npf-editable">10.4GT/s QPI</p>' +
        '                                  </dd>' +
        '                                  <dd class="mr20">' +
        '                                      <p class="sub-til npf-editable"></p>' +
        '                                      <p class="sub-text npf-editable">AVX512</p>' +
        '                                  </dd>' +
        '                              </dl>' +
        '                          </div>' +
        '                      </div>' +
        '                  </div>' +
        '              </div>' +
        '          </div>' +
        '          <div class="c-g-12 s-24 npf-product-nature-wrap">' +
        '              <h3 class="npf-editable">最新DDR4，性能提升60%</h3>' +
        '              <p class="text npf-editable">超大内存带宽，内存带宽最高可达2666MT/s，相比上一代内存带宽提升11%。搭配六通道DDR4内存，极大发挥内存优势，相比上一代，内存性能最高可提升60%</p>' +
        '              <div class="npf-pic-editable"><img class="visible-xs" src="css/img/ddr-phone.png" alt=""/></div>' +
        '              <div class="npf-svg-editable">' +
        '              <svg class="hidden-xs" x="0px" y="0px" width="638px" height="206px" viewBox="0 8.5 638 206" enable-background="new 0 8.5 638 206">' +
        '                  <rect x="489.9" y="8.5" fill="#EBEBEB" width="1" height="142"/>' +
        '                  <text transform="matrix(1 0 0 1 466.9998 170.3272)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">20000</text>' +
        '                  <text transform="matrix(1 0 0 1 369.6856 170.3272)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">15000</text>' +
        '                  <text transform="matrix(1 0 0 1 270.7333 170.3272)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">10000</text>' +
        '                  <text transform="matrix(1 0 0 1 174.8185 170.3272)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">5000</text>' +
        '                  <rect x="390.9" y="8.5" fill="#EBEBEB" width="1" height="142"/>' +
        '                  <rect x="291.9" y="8.5" fill="#EBEBEB" width="1" height="142"/>' +
        '                  <rect x="193" y="8.5" fill="#EBEBEB" width="1" height="142"/>' +
        '                  <text transform="matrix(1 0 0 1 55.9999 51.7)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">多核</text>' +
        '                  <text transform="matrix(1 0 0 1 -9.155273e-005 68.5)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">固定大小拷贝</text>' +
        '                  <text transform="matrix(1 0 0 1 55.9999 99.7)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">单核</text>' +
        '                  <text transform="matrix(1 0 0 1 -9.155273e-005 116.5)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">固定大小拷贝</text>' +
        '                  <rect x="94" y="8.5" fill="#EBEBEB" width="1" height="142"/>' +
        '                  <text transform="matrix(1 0 0 1 89.8943 170.3213)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">0</text>' +
        '                  <g id="ddrSvg2" class="fadeInBefore">' +
        '                      <text transform="matrix(1 0 0 1 247 107.144)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="24">7631</text>' +
        '                      <text transform="matrix(1 0 0 1 308 107.144)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">MiB/s</text>' +
        '                  </g>' +
        '                  <g id="ddrSvg1" class="fadeInBefore">' +
        '                      <text transform="matrix(1 0 0 1 515 59.144)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="24">20044</text>' +
        '                      <text transform="matrix(1 0 0 1 591.3 59.144)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">MiB/s</text>' +
        '                  </g>' +
        '                  <line id="ddr1" fill="none" stroke="#00A4FF" stroke-width="8" stroke-miterlimit="10" x1="94" y1="51.5" x2="495" y2="51.5"/>' +
        '                  <line id="ddr2" fill="none" stroke="#C7C7C7" stroke-width="8" stroke-miterlimit="10" x1="94" y1="61.5" x2="374" y2="61.5"/>' +
        '                  <line id="ddr3" fill="none" stroke="#00A4FF" stroke-width="8" stroke-miterlimit="10" x1="94" y1="99.5" x2="227" y2="99.5"/>' +
        '                  <line id="ddr4"  fill="none" stroke="#C7C7C7" stroke-width="8" stroke-miterlimit="10" x1="94" y1="109.5" x2="174.8" y2="109.5"/>' +
        '                  <g>' +
        '                      <text transform="matrix(1 0 0 1 252.3625 211.9248)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">二代内存</text>' +
        '                      <path fill="#C7C7C7" d="M238.6,204.7h6v6h-6V204.7z"/>' +
        '                      <g>' +
        '                          <text transform="matrix(1 0 0 1 343.3624 211.9243)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">三代内存</text>' +
        '                          <path fill="#00A4FF" d="M329.6,204.7h6v6h-6V204.7z"/>' +
        '                      </g>' +
        '                  </g>' +
        '              </svg>' +
        '              </div>' +
        '              <p class="links-text" id="ddrBtn"><a href="javascript:;" class="npf-editable">进一步了解处理器</a></p>' +
        '              <div class="npf-nature-wrap hide">' +
        '                  <div class="npf-product-nature-more">' +
        '                      <div class="npf-nature-more-wrap">' +
        '                          <div class="til npf-editable">二代DDR4</div>' +
        '                          <dl>' +
        '                              <!--<dt>E5-2680v4</dt>-->' +
        '                              <dd class="ml20">' +
        '                                  <p class="sub-til npf-editable">内存类型</p>' +
        '                                  <p class="sub-text npf-editable">DDR4</p>' +
        '                              </dd>' +
        '                              <dd class="ml20">' +
        '                                  <p class="sub-til npf-editable">内存通道</p>' +
        '                                  <p class="sub-text npf-editable">4</p>' +
        '                              </dd>' +
        '                              <dd class="ml20">' +
        '                                  <p class="sub-til npf-editable">最大内存带宽</p>' +
        '                                  <p class="sub-text npf-editable">76.8 GB/S</p>' +
        '                              </dd>' +
        '                          </dl>' +
        '                      </div>' +
        '                      <div class="npf-nature-more-wrap">' +
        '                          <div class="til npf-editable">三代DDR4</div>' +
        '                          <div class="two-table">' +
        '                              <dl>' +
        '                                  <!--<dt>Skylake</dt>-->' +
        '                                  <dd>' +
        '                                      <p class="sub-til npf-editable"></p>' +
        '                                      <p class="sub-text npf-editable">DDR4</p>' +
        '                                  </dd>' +
        '                                  <dd>' +
        '                                      <p class="sub-til npf-editable"></p>' +
        '                                      <p class="sub-text npf-editable">6</p>' +
        '                                  </dd>' +
        '                                  <dd>' +
        '                                      <p class="sub-til npf-editable"></p>' +
        '                                      <p class="sub-text npf-editable">128 GB/S</p>' +
        '                                  </dd>' +
        '                              </dl>' +
        '                          </div>' +
        '                      </div>' +
        '                  </div>' +
        '              </div>' +
        '          </div>' +
        '      </div>' +
        '  </div>';

    MODULE['bandwidthMod'] = '<div class="npf-tab-box c-p-y-tall npf-mod-wrap">' +
        '    <h3 class="npf-title npf-editable">低延时 高吞吐</h3>' +
        '    <div class="c-tab-normal">' +
        '        <ul>' +
        '            <li class="c-tab-simple actived">' +
        '                <a href="javascript:;"><span class="c-tab-tit npf-editable">PPS</span></a>' +
        '            </li>' +
        '            <li class="c-tab-simple ">' +
        '                <a href="javascript:;"><span class="c-tab-tit npf-editable">内网带宽</span></a>' +
        '            </li>' +
        '        </ul>' +
        '        <div class="c-tab-panel">' +
        '            <div class="c-grid">' +
        '                <div class="c-g-12 s-24 npf-dec-text">' +
        '                    <h4 class="npf-editable">超高性能包转发能力，性能提升4倍</h4>' +
        '                    <p class="text npf-editable">' +
        '                        腾讯云在云服务器虚拟化、网络转发能力上进行深度定制研发，实例的网络性能上限大幅提升，最新网络优化型N1实例，使用智能网卡硬件，在网卡上实现虚拟交换，网卡直通虚拟机，最高达到1,500,000 PPS，相比上一代提升了4倍，为您提供低延时、高吞吐的能力，推荐用于高网络包收发场景，如视频直播转播、视频编解码、中大型电商前端服务器及大型MOBA游戏等。<br/><br/><em style="font-size: 12px;">注：8月即将推出全新网络优化型N1，满足更多客户同时在线</em>' +
        '                    </p>' +
        '                </div>' +
        '                <div class="c-g-12 s-24 npf-img-wrap">' +
        '                    <img class="visible-xs" src="//imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/event/npf-v2/cvm3/css/img/pps-phone2.png" alt=""/>' +
        '                    <svg class="hidden-xs" x="0px" y="0px" width="586px" height="166px" viewBox="0 0 586 166" enable-background="new 0 0 586 166">' +
        '                        <rect x="482" fill="#EBEBEB" width="1" height="142"/>' +
        '                        <text transform="matrix(1 0 0 1 469.1492 165.5456)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">150</text>' +
        '                        <text transform="matrix(1 0 0 1 386.1184 165.5456)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">120</text>' +
        '                        <text transform="matrix(1 0 0 1 307.5374 165.5456)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">90</text>' +
        '                        <text transform="matrix(1 0 0 1 224.5066 165.5456)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">60</text>' +
        '                        <text transform="matrix(1 0 0 1 141.4756 165.5456)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">30</text>' +
        '                        <rect x="399" fill="#EBEBEB" width="1" height="142"/>' +
        '                        <rect x="316" fill="#EBEBEB" width="1" height="142"/>' +
        '                        <rect x="233" fill="#EBEBEB" width="1" height="142"/>' +
        '                        <rect x="150" fill="#EBEBEB" width="1" height="142"/>' +
        '                        <text transform="matrix(1 0 0 1 -9.155273e-005 56.2236)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">三代网络</text>' +
        '                        <text transform="matrix(1 0 0 1 -9.155273e-005 94.2236)" fill="#666666" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">二代网络</text>' +
        '                        <rect x="67" fill="#EBEBEB" width="1" height="142"/>' +
        '                        <text transform="matrix(1 0 0 1 62.8943 165.5397)" fill="#999999" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">0</text>' +
        '                        <g id="ppsSvg" class="fadeInBefore">' +
        '                            <text transform="matrix(1 0 0 1 490 59.5455)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="24">150</text>' +
        '                            <text transform="matrix(1 0 0 1 535.8 57.8258)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="24">万</text>' +
        '                            <text transform="matrix(1 0 0 1 559.8 59.5455)" fill="#00A4FF" font-family="PingFangSC-Light,\'helvetica neue\',\'microsoft yahei ui\',\'microsoft yahei\'" font-size="14">PPS</text>' +
        '                        </g>' +
        '                        <line id="pps1" fill="none" stroke="#00A4FF" stroke-width="8" stroke-miterlimit="10" x1="67" y1="51.4" x2="483" y2="51.4"/>' +
        '                        <line id="pps2" fill="none" stroke="#C7C7C7" stroke-width="8" stroke-miterlimit="10" x1="67" y1="89.4" x2="173" y2="89.4"/>' +
        '                    </svg>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '        <div class="c-tab-panel hide">' +
        '            <div class="c-grid">' +
        '                <div class="c-g-12 s-24 npf-dec-text">' +
        '                    <h4 class="npf-editable">最高内网带宽可支持 10Gbps</h4>' +
        '                    <p class="text npf-editable">底层搭载25Gb网卡环境，可支持超大内网传输带宽，满足极高的内网传输需求，最高内网带宽可支持 10Gbps，非常适用于视频直播转播、MOBA游戏等对内网带宽要求较高的业务<br/><br/><em style="font-size: 12px;">注：8月即将推出全新网络优化型N1，满足更多客户同时在线</em>' +
        '                    </p>' +
        '                </div>' +
        '                <div class="c-g-12 s-24 npf-img-wrap">' +
        '                    <img class="visible-xs" src="//imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/event/npf-v2/cvm3/css/img/dk-phone2.png" alt=""/>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    MODULE['moreMod1'] = '<div class="npf-more-vs-box c-p-y-tall npf-mod-wrap">' +
        '    <h3 class="npf-title npf-editable">更多升级机型</h3>' +
        '    <p class="npf-sub-text npf-editable">三代云服务器推出更多升级机型，包括标准型S3、计算型C3与网络优化型N1，以下是与上一代机型对比数据</p>' +
        '    <div class="c-grid vs-grid-wrap">' +
        '        <div class="c-g-8 s-24 vs-grid">' +
        '            <div class="npf-vs-wrap disabled">' +
        '                <h4 class="npf-editable">标准型S2</h4>' +
        '                <dl>' +
        '                    <dt class="npf-editable">CPU：</dt>' +
        '                    <dd class="npf-editable">E5-2680v4 2.4GHz</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">内存:</dt>' +
        '                    <dd class="npf-editable">四通道DDR4</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">最大售卖配置:</dt>' +
        '                    <dd class="npf-editable">32核 128GiB</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">磁盘:</dt>' +
        '                    <dd class="npf-editable">本地硬盘、云硬盘</dd>' +
        '                </dl>' +
        '            </div>' +
        '            <i class="vs-icon"></i>' +
        '            <div class="npf-vs-wrap">' +
        '                <h4 class="npf-editable">标准型S3</h4>' +
        '                <dl>' +
        '                    <dt class="npf-editable">CPU:</dt>' +
        '                    <dd class="npf-editable">Skylake 2.5GHz</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">内存:</dt>' +
        '                    <dd class="npf-editable">六通道DDR4<br/>带宽达2666MT/s</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">最大售卖配置:</dt>' +
        '                    <dd class="npf-editable">64核 240GiB</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">磁盘:</dt>' +
        '                    <dd class="npf-editable">全种类云硬盘</dd>' +
        '                </dl>' +
        '            </div>' +
        '        </div>' +
        '        <div class="c-g-8 s-24 vs-grid">' +
        '            <div class="npf-vs-wrap disabled">' +
        '                <h4 class="npf-editable">计算型C2</h4>' +
        '                <dl>' +
        '                    <dt class="npf-editable">CPU:</dt>' +
        '                    <dd class="npf-editable">E5-2667v4 3.2GHz</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">内存:</dt>' +
        '                    <dd class="npf-editable">四通道DDR4</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">磁盘:</dt>' +
        '                    <dd class="npf-editable">本地硬盘、SSD云硬盘</dd>' +
        '                </dl>' +
        '            </div>' +
        '            <i class="vs-icon"></i>' +
        '            <div class="npf-vs-wrap">' +
        '                <h4 class="npf-editable">计算型C3</h4>' +
        '                <dl>' +
        '                    <dt class="npf-editable">CPU:</dt>' +
        '                    <dd class="npf-editable">Skylake 6134 3.2GHz<br/>睿频高达3.6 GHz</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">内存:</dt>' +
        '                    <dd class="npf-editable">六通道DDR4<br/>带宽达 2666MT/s</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">磁盘:</dt>' +
        '                    <dd class="npf-editable">SSD云硬盘</dd>' +
        '                </dl>' +
        '            </div>' +
        '        </div>' +
        '        <div class="c-g-8 s-24 vs-grid">' +
        '            <div class="npf-vs-wrap disabled">' +
        '                <h4 class="npf-editable">标准型S2</h4>' +
        '                <dl>' +
        '                    <dt class="npf-editable">CPU:</dt>' +
        '                    <dd class="npf-editable">E5-2680v4 2.4GHz</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">内存:</dt>' +
        '                    <dd class="npf-editable">四通道DDR4</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">磁盘:</dt>' +
        '                    <dd class="npf-editable">本地硬盘、云硬盘</dd>' +
        '                </dl>' +
        '            </div>' +
        '            <i class="vs-icon"></i>' +
        '            <div class="npf-vs-wrap">' +
        '                <h4 class="npf-editable">网络优化型N1</h4>' +
        '                <dl>' +
        '                    <dt class="npf-editable">CPU:</dt>' +
        '                    <dd class="npf-editable">Skylake 2.5GHz</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">网络环境:</dt>' +
        '                    <dd class="npf-editable">25G网卡双bonding<br/>25G网络交换机</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">内存:</dt>' +
        '                    <dd class="npf-editable">六通道DDR4<br/>带宽达 2666MT/s</dd>' +
        '                </dl>' +
        '                <dl>' +
        '                    <dt class="npf-editable">磁盘:</dt>' +
        '                    <dd class="npf-editable">全种类云硬盘</dd>' +
        '                </dl>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    MODULE['moreMod2'] = '<div class="npf-more-need-box c-p-y-tall npf-mod-wrap">' +
        '    <h3 class="npf-title npf-editable">满足更多用户需求</h3>' +
        '    <p class="npf-sub-text npf-editable">第三代云服务器开启全行业计算提速</p>' +
        '    <div class="c-grid npf-need-wrap">' +
        '        <div class="c-g-5 s-24 npf-need-box">' +
        '            <p><i class="icon-need1"></i></p>' +
        '            <h4 class="npf-editable">Web服务</h4>' +
        '            <p class="text npf-editable">承载更多玩家、更多实时在线，轻松承载Web数据处理能力</p>' +
        '        </div>' +
        '        <div class="c-g-5 s-24 npf-need-box">' +
        '            <p><i class="icon-need2"></i></p>' +
        '            <h4 class="npf-editable">游戏行业</h4>' +
        '            <p class="text npf-editable">承载更多玩家、更多实时在线，轻松度过游戏在线高峰</p>' +
        '        </div>' +
        '        <div class="c-g-5 s-24 npf-need-box">' +
        '            <p><i class="icon-need3"></i></p>' +
        '            <h4 class="npf-editable">渲染、基因计算</h4>' +
        '            <p class="text npf-editable">计算密集型应用最佳选择，承载更多在线计算、大型数据处理能力</p>' +
        '        </div>' +
        '        <div class="c-g-5 s-24 npf-need-box">' +
        '            <p><i class="icon-need4"></i></p>' +
        '            <h4 class="npf-editable">视频行业</h4>' +
        '            <p class="text npf-editable">更稳定的媒体处理能力，更多并发、更短延时，是视频行业最佳之选 </p>' +
        '        </div>' +
        '        <div class="c-g-5 s-24 npf-need-box">' +
        '            <p><i class="icon-need5"></i></p>' +
        '            <h4 class="npf-editable">金融行业</h4>' +
        '            <p class="text npf-editable">存储更高吞吐量，交易性能更加稳定，更适合金融复杂性数据处理 </p>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    MODULE['buyMod'] = '<div class="npf-tab-box c-p-y-tall npf-mod-wrap">' +
        '    <h3 class="npf-title npf-editable">购买方式灵活</h3>' +
        '    <p class="npf-sub-text npf-editable">推出更多升级机型，包括标准型S3、计算型C3与网络优化型N1，以下是与上一代机型对比数据</p>' +
        '    <div class="c-tab-normal">' +
        '        <div class="c-tab-panel mt40">' +
        '            <div class="c-grid">' +
        '                <div class="c-g-12 s-24 npf-dec-text">' +
        '                    <h4 class="npf-editable">包年包月预付费低至5折</h4>' +
        '                    <p class="text npf-editable">GA2实例支持灵活的使用支付方式，用户可以按年支付以获得最高的使用折扣 也支持按月周期付费，以降低用户的计算资源使用一次性投入成本。 同样支持按量付费方式使用户以最低的单次使用成本来应对临时性的短期使用需求。</p>' +
        '                </div>' +
        '                <div class="c-g-12 s-24 npf-img-wrap npf-pic-editable">' +
        '                    <img src="css/img/map.png" alt="">' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    MODULE['typeMod'] = '<div class="npf-more-vs-box npf-mod-wrap">' +
        '    <div class="c-grid vs-grid-wrap mt0">' +
        '        <div class="c-g-6 s-24 more-grid">' +
        '            <h3 class="npf-title npf-editable">丰富机型满足更多需求</h3>' +
        '            <p class="npf-sub-text npf-editable">GA2 实例搭配 AMD 最新 S7150 系列 GPU，单 GPU 核心具有 2048 个处理器核心，单 GPU 最高可达 3.77 TFLOPS 单精度浮点运算</p>' +
        '        </div>' +
        '        <div class="c-g-6 s-24 more-grid">' +
        '            <h3 class="more-title npf-editable">8核</h3>' +
        '            <p class="npf-sub-til npf-editable">CPU</p>' +
        '            <p class="npf-sub-text npf-editable">Intel 2680v4</p>' +
        '        </div>' +
        '        <div class="c-g-6 s-24 more-grid">' +
        '            <h3 class="more-title npf-editable">16G</h3>' +
        '            <p class="npf-sub-til npf-editable">内存</p>' +
        '            <p class="npf-sub-text npf-editable">DDR4</p>' +
        '        </div>' +
        '        <div class="c-g-6 s-24 more-grid">' +
        '            <h3 class="more-title npf-editable">1/4</h3>' +
        '            <p class="npf-sub-til npf-editable">S7150 GPU</p>' +
        '            <p class="npf-sub-text npf-editable">vGPU</p>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    MODULE['hotbuyMod'] = '<div class="npf-buy-box c-p-y-tall npf-mod-wrap">' +
        '    <h3 class="npf-title npf-editable">云服务器热卖</h3>' +
        '    <p class="npf-sub-text npf-editable">推出更多升级机型，包括标准型S3、计算型C3与网络优化型N1，以下是与上一代机型对比数据</p>' +
        '    <div class="product-list npf-wrap">' +
        '        <div class="c-grid">' +
        '            <div class="c-g-6 s-24">' +
        '                <div class="product-list-item">' +
        '                    <div class="product-hd">' +
        '                        <strong class="product-title npf-editable">入门型</strong>' +
        '                        <p class="product-desc npf-editable">适用于起步阶段的网站</p>' +
        '                    </div>' +
        '                    <div class="product-bd">' +
        '                        <ul class="product-config">' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                        </ul>' +
        '                    </div>' +
        '                    <div class="product-ft">' +
        '                        <div class="product-price">' +
        '                                    <span class="product-price-new">' +
        '                                        <span class="product-price-label npf-editable">￥</span>' +
        '                                        <span class="product-price-num npf-editable">300</span>' +
        '                                        <span class="product-price-unit npf-editable">/月</span>' +
        '                                    </span>' +
        '                            <s class="product-price-origin">' +
        '                                <span class="product-price-label npf-editable">￥</span>' +
        '                                <span class="product-price-num npf-editable">300</span>' +
        '                                <span class="product-price-unit npf-editable">/月</span>' +
        '                            </s>' +
        '                        </div>' +
        '                        <div class="product-toolbar">' +
        '                            <a href="#" class="product-btn npf-editable">立即购买</a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="c-g-6 s-24">' +
        '                <div class="product-list-item">' +
        '                    <div class="product-hd">' +
        '                        <strong class="product-title npf-editable">入门型</strong>' +
        '                        <p class="product-desc npf-editable">适用于起步阶段的网站</p>' +
        '                    </div>' +
        '                    <div class="product-bd">' +
        '                        <ul class="product-config">' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                        </ul>' +
        '                    </div>' +
        '                    <div class="product-ft">' +
        '                        <div class="product-price">' +
        '                                    <span class="product-price-new">' +
        '                                        <span class="product-price-label npf-editable">￥</span>' +
        '                                        <span class="product-price-num npf-editable">300</span>' +
        '                                        <span class="product-price-unit npf-editable">/月</span>' +
        '                                    </span>' +
        '                            <s class="product-price-origin">' +
        '                                <span class="product-price-label npf-editable">￥</span>' +
        '                                <span class="product-price-num npf-editable">300</span>' +
        '                                <span class="product-price-unit npf-editable">/月</span>' +
        '                            </s>' +
        '                        </div>' +
        '                        <div class="product-toolbar">' +
        '                            <a href="#" class="product-btn npf-editable">立即购买</a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="c-g-6 s-24">' +
        '                <div class="product-list-item">' +
        '                    <div class="product-hd">' +
        '                        <strong class="product-title npf-editable">入门型</strong>' +
        '                        <p class="product-desc npf-editable">适用于起步阶段的网站</p>' +
        '                    </div>' +
        '                    <div class="product-bd">' +
        '                        <ul class="product-config">' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                        </ul>' +
        '                    </div>' +
        '                    <div class="product-ft">' +
        '                        <div class="product-price">' +
        '                            <span class="product-price-new">' +
        '                                <span class="product-price-label npf-editable">￥</span>' +
        '                                <span class="product-price-num npf-editable">300</span>' +
        '                                <span class="product-price-unit npf-editable">/月</span>' +
        '                            </span>' +
        '                            <s class="product-price-origin">' +
        '                                <span class="product-price-label npf-editable">￥</span>' +
        '                                <span class="product-price-num npf-editable">300</span>' +
        '                                <span class="product-price-unit npf-editable">/月</span>' +
        '                            </s>' +
        '                        </div>' +
        '                        <div class="product-toolbar">' +
        '                            <a href="#" class="product-btn npf-editable">立即购买</a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="c-g-6 s-24">' +
        '                <div class="product-list-item">' +
        '                    <div class="product-hd">' +
        '                        <strong class="product-title npf-editable">入门型</strong>' +
        '                        <p class="product-desc npf-editable">适用于起步阶段的网站</p>' +
        '                    </div>' +
        '                    <div class="product-bd">' +
        '                        <ul class="product-config">' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                            <li class="product-config-item">' +
        '                                <span class="product-config-text npf-editable">1核</span>' +
        '                                <span class="product-config-label npf-editable">CUP</span>' +
        '                            </li>' +
        '                        </ul>' +
        '                    </div>' +
        '                    <div class="product-ft">' +
        '                        <div class="product-price">' +
        '                            <span class="product-price-new">' +
        '                                <span class="product-price-label npf-editable">￥</span>' +
        '                                <span class="product-price-num npf-editable">300</span>' +
        '                                <span class="product-price-unit npf-editable">/月</span>' +
        '                            </span>' +
        '                            <s class="product-price-origin">' +
        '                                <span class="product-price-label npf-editable">￥</span>' +
        '                                <span class="product-price-num npf-editable">300</span>' +
        '                                <span class="product-price-unit npf-editable">/月</span>' +
        '                            </s>' +
        '                        </div>' +
        '                        <div class="product-toolbar">' +
        '                            <a href="#" class="product-btn npf-editable">立即购买</a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    MODULE['flowMod'] = `
        <div class="npf-buy-box c-p-y-tall npf-mod-wrap" style="background-color: #f5f6f7;">
            <h3 class="npf-title npf-editable">流量包优惠</h3>
            <p class="npf-sub-text npf-editable">推出更多升级机型，包括标准型S3、计算型C3与网络优化型N1，以下是与上一代机型对比数据</p>
            <div class="product-cdn-list npf-wrap">
                <div class="c-grid">
                    <div class="c-g-6 s-24">
                        <div class="product-cdn-list-item">
                            <div class="product-cdn-hd">
                                <div class="product-cdn-title">
                                    <span class="product-cdn-title-value npf-editable">100</span>
                                    <span class="product-cdn-title-unit npf-editable">GB</span>
                                </div>
                            </div>
                            <div class="product-cdn-bd">
                                <div class="product-cdn-config">
                                    <div class="product-cdn-config-item">
                                        <div class="product-cdn-config-label npf-editable">
                                            购买数量
                                        </div>
                                        <div class="product-cdn-config-control">
                                            <div class="product-cdn-config-numberbox">
                                                <span class="product-cdn-config-numberbox-btn product-cdn-config-numberbox-btn-disabled">
                                                    <span class="product-cdn-config-numberbox-icon-minus">-</span>
                                                </span>
                                                <div class="product-cdn-config-numberbox-input">
                                                    <input type="tel" value="1">
                                                </div>
                                                <span class="product-cdn-config-numberbox-btn">
                                                    <span class="product-cdn-config-numberbox-icon-plus">+</span>
                                                </span>
                                            </div>
                                            <div class="product-cdn-config-numberbox-unit npf-editable">月</div>
                                        </div>
                                    </div>
                                    <div class="product-cdn-config-item">
                                        <div class="product-cdn-config-label npf-editable">
                                            总价
                                        </div>
                                        <div class="product-cdn-config-control">
                                            <div class="product-cdn-config-price">
                                                <span class="product-cdn-config-price-new">
                                                    <span class="product-cdn-config-price-label npf-editable">￥</span>
                                                    <span class="product-cdn-config-price-num npf-editable">300</span>
                                                </span>
                                                <s class="product-cdn-config-price-origin">
                                                    <span class="product-cdn-config-price-label npf-editable">￥</span>
                                                    <span class="product-cdn-config-price-num npf-editable">300</span>
                                                </s>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-cdn-ft">
                                <a href="javascript:;" class="product-cdn-btn npf-editable">
                                    立即购买
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="c-g-6 s-24">
                        <div class="product-cdn-list-item">
                            <div class="product-cdn-hd">
                                <div class="product-cdn-title">
                                    <span class="product-cdn-title-value npf-editable">100</span>
                                    <span class="product-cdn-title-unit npf-editable">GB</span>
                                </div>
                            </div>
                            <div class="product-cdn-bd">
                                <div class="product-cdn-config">
                                    <div class="product-cdn-config-item">
                                        <div class="product-cdn-config-label npf-editable">
                                            购买数量
                                        </div>
                                        <div class="product-cdn-config-control">
                                            <div class="product-cdn-config-numberbox">
                                                <span class="product-cdn-config-numberbox-btn product-cdn-config-numberbox-btn-disabled">
                                                    <span class="product-cdn-config-numberbox-icon-minus">-</span>
                                                </span>
                                                <div class="product-cdn-config-numberbox-input">
                                                    <input type="tel" value="1">
                                                </div>
                                                <span class="product-cdn-config-numberbox-btn">
                                                    <span class="product-cdn-config-numberbox-icon-plus">+</span>
                                                </span>
                                            </div>
                                            <div class="product-cdn-config-numberbox-unit npf-editable">月</div>
                                        </div>
                                    </div>
                                    <div class="product-cdn-config-item">
                                        <div class="product-cdn-config-label npf-editable">
                                            总价
                                        </div>
                                        <div class="product-cdn-config-control">
                                            <div class="product-cdn-config-price">
                                                <span class="product-cdn-config-price-new">
                                                    <span class="product-cdn-config-price-label npf-editable">￥</span>
                                                    <span class="product-cdn-config-price-num npf-editable">300</span>
                                                </span>
                                                <s class="product-cdn-config-price-origin">
                                                    <span class="product-cdn-config-price-label npf-editable">￥</span>
                                                    <span class="product-cdn-config-price-num npf-editable">300</span>
                                                </s>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-cdn-ft">
                                <a href="javascript:;" class="product-cdn-btn npf-editable">
                                    立即购买
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="c-g-6 s-24">
                        <div class="product-cdn-list-item">
                            <div class="product-cdn-hd">
                                <div class="product-cdn-title">
                                    <span class="product-cdn-title-value npf-editable">100</span>
                                    <span class="product-cdn-title-unit npf-editable">GB</span>
                                </div>
                            </div>
                            <div class="product-cdn-bd">
                                <div class="product-cdn-config">
                                    <div class="product-cdn-config-item">
                                        <div class="product-cdn-config-label npf-editable">
                                            购买数量
                                        </div>
                                        <div class="product-cdn-config-control">
                                            <div class="product-cdn-config-numberbox">
                                                <span class="product-cdn-config-numberbox-btn product-cdn-config-numberbox-btn-disabled">
                                                    <span class="product-cdn-config-numberbox-icon-minus">-</span>
                                                </span>
                                                <div class="product-cdn-config-numberbox-input">
                                                    <input type="tel" value="1">
                                                </div>
                                                <span class="product-cdn-config-numberbox-btn">
                                                    <span class="product-cdn-config-numberbox-icon-plus">+</span>
                                                </span>
                                            </div>
                                            <div class="product-cdn-config-numberbox-unit npf-editable">月</div>
                                        </div>
                                    </div>
                                    <div class="product-cdn-config-item">
                                        <div class="product-cdn-config-label npf-editable">
                                            总价
                                        </div>
                                        <div class="product-cdn-config-control">
                                            <div class="product-cdn-config-price">
                                                <span class="product-cdn-config-price-new">
                                                    <span class="product-cdn-config-price-label npf-editable">￥</span>
                                                    <span class="product-cdn-config-price-num npf-editable">300</span>
                                                </span>
                                                <s class="product-cdn-config-price-origin">
                                                    <span class="product-cdn-config-price-label npf-editable">￥</span>
                                                    <span class="product-cdn-config-price-num npf-editable">300</span>
                                                </s>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-cdn-ft">
                                <a href="javascript:;" class="product-cdn-btn npf-editable">
                                    立即购买
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="c-g-6 s-24">
                        <div class="product-cdn-list-item">
                            <div class="product-cdn-hd">
                                <div class="product-cdn-title">
                                    <span class="product-cdn-title-value npf-editable">100</span>
                                    <span class="product-cdn-title-unit npf-editable">GB</span>
                                </div>
                            </div>
                            <div class="product-cdn-bd">
                                <div class="product-cdn-config">
                                    <div class="product-cdn-config-item">
                                        <div class="product-cdn-config-label npf-editable">
                                            购买数量
                                        </div>
                                        <div class="product-cdn-config-control">
                                            <div class="product-cdn-config-numberbox">
                                                <span class="product-cdn-config-numberbox-btn product-cdn-config-numberbox-btn-disabled">
                                                    <span class="product-cdn-config-numberbox-icon-minus">-</span>
                                                </span>
                                                <div class="product-cdn-config-numberbox-input">
                                                    <input type="tel" value="1">
                                                </div>
                                                <span class="product-cdn-config-numberbox-btn">
                                                    <span class="product-cdn-config-numberbox-icon-plus">+</span>
                                                </span>
                                            </div>
                                            <div class="product-cdn-config-numberbox-unit npf-editable">月</div>
                                        </div>
                                    </div>
                                    <div class="product-cdn-config-item">
                                        <div class="product-cdn-config-label npf-editable">
                                            总价
                                        </div>
                                        <div class="product-cdn-config-control">
                                            <div class="product-cdn-config-price">
                                                <span class="product-cdn-config-price-new">
                                                    <span class="product-cdn-config-price-label npf-editable">￥</span>
                                                    <span class="product-cdn-config-price-num npf-editable">300</span>
                                                </span>
                                                <s class="product-cdn-config-price-origin">
                                                    <span class="product-cdn-config-price-label npf-editable">￥</span>
                                                    <span class="product-cdn-config-price-num npf-editable">300</span>
                                                </s>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-cdn-ft">
                                <a href="javascript:;" class="product-cdn-btn npf-editable">
                                    立即购买
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>`;

    MODULE['sceneMod'] = '<div class="npf-swipe-box c-p-y-tall npf-mod-wrap">' +
        '    <h3 class="npf-title npf-editable">应用场景</h3>' +
        '    <p class="npf-sub-text npf-editable">打破地域限制，实现在线电影电视后期编辑</p>' +
        '    <div id="slider" class="swipe">' +
        '        <div class="swipe-wrap">' +
        '            <div class="swipe-wrap-panel npf-pic-editable">' +
        '                <img src="css/img/lunbo1.png" alt=""/>' +
        '                <div class="main-text">' +
        '                    <i class="comma-up-icon"></i>' +
        '                    <div class="text npf-editable">通过远程桌面协议和GPU渲染型实例可以帮我们实现在线实时电影电视后期制作编辑，可在任何地点使用多种设备接入。多人本地终端同时工作，提高效率的同时保证数据一致性，数据存储也存在腾讯云的CFS或COS上，随时内网访问拉取使用，数据安全得到保障。腾讯云优质的网络延时可进一步的提升我们的网络接入体验和降低整体运营成本。<p class="sub-til"><em class="npf-editable">中科大洋XXX负责人</em></p>' +
        '                    </div>' +
        '                    <i class="comma-down-icon"></i>' +
        '                </div>' +
        '            </div>' +
        '            <div class="swipe-wrap-panel npf-pic-editable">' +
        '                <img src="css/img/lunbo2.png" alt=""/>' +
        '                <div class="main-text">' +
        '                    <i class="comma-up-icon"></i>' +
        '                    <div class="text npf-editable">采用云端渲染技术 实现跨终端游戏试玩游戏平台部通过视频串流技术还有GPU可视化云服务器提供给用户PC端和手机端游戏试玩功能，用户不用购买游戏，也不用安装游戏，实现游戏跨终端试玩。最大化节省<p class="sub-til"><em class="npf-editable">中科大洋XXX负责人</em></p>' +
        '                    </div>' +
        '                    <i class="comma-down-icon"></i>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '    <a href="javascript:;" class="npf-prev-btn" id="prev"><i class="gray-arrow-left-icon"></i></a>' +
        '    <a href="javascript:;" class="npf-next-btn" id="next"><i class="gray-arrow-right-icon"></i></a>' +
        '</div>';

    MODULE['testMod'] = '<div id="g-footer-guide" class="qc-footer-action npf-mod-wrap">' +
        '    <div data-id="g-footer-guide-3" class="footer-action">' +
        '        <div class="text npf-editable">内测名额有限，手快有，手慢无</div>' +
        '        <div class="op-btns">' +
        '            <a href="https://www.qcloud.com/act/apply/CVM3" hotrep="hp.footer.guide.console" class="bt npf-editable">立即申请</a>' +
        '        </div>' +
        '    </div>' +
        '    <svg xmlns="http://www.w3.org/2000/svg" class="action-bg">' +
        '        <g>' +
        '            <defs>' +
        '                <linearGradient id="Gradient1">' +
        '                    <stop offset="0%" stop-color="#fff" stop-opacity="0"></stop>' +
        '                    <stop offset="99%" stop-color="#fff" stop-opacity="0.2"></stop>' +
        '                    <stop offset="99.9%" stop-color="#fff" stop-opacity="0.8"></stop>' +
        '                    <stop offset="100%" stop-color="#fff" stop-opacity="0.8"></stop>' +
        '                </linearGradient>' +
        '            </defs>' +
        '            <rect x="471.985" y="30" width="200" height="2" stroke="white" stroke-width="0" fill="url(#Gradient1)">' +
        '                <animate attributeName="x" from="0" by="100%" begin="0" dur="15s" repeatCount="indefinite"></animate>' +
        '            </rect>' +
        '            <rect x="58.1355%" y="60" width="300" height="2" stroke="white" stroke-width="0" fill="url(#Gradient1)">' +
        '                <animate attributeName="x" from="0" by="100%" begin="25s" dur="15s" repeatCount="indefinite"></animate>' +
        '            </rect>' +
        '            <rect x="91.4688%" y="100" width="100" height="2" stroke="white" stroke-width="0" fill="url(#Gradient1)">' +
        '                <animate attributeName="x" from="0" by="100%" begin="5s" dur="15s" repeatCount="indefinite"></animate>' +
        '            </rect>' +
        '        </g>' +
        '    </svg>' +
        '</div>';

    function addModule(module) {
        $('.npf-skin-wrap').append(MODULE[module])
    }

    $('.template-list a').click(function() {
        addModule($(this).attr('data-action'));
    })

    // JS重新载入
    $(document).delegate('#cpuBtn, #ddrBtn, .npf-tab-box .c-tab-simple', 'click', function() {
        $('body').append('<script src="npf.js"></script>');
    })

    // 每个模块添加功能操作浮层
    var dialogManage = '<div class="dialog-manage">' +
        '    <a class="btn-up" href="javascript:void(0);">上移</a>' +
        '    <a class="btn-down" href="javascript:void(0);">下移</a>' +
        '    <a class="btn-copy" href="javascript:void(0);">复制</a>' +
        '    <a class="btn-del" href="javascript:void(0);">删除</a>' +
        '</div>';

    // 浮层的显示与否                   
    $(document).delegate('.npf-mod-wrap', 'hover', function(e) {
        var _this = $(this)
        if (e.type == 'mouseenter') {
            _this.append(dialogManage)
        } else {
            $('.dialog-manage').remove();
        }
    })


    // 每个模块添加文字编辑功能
    $(document).delegate('.npf-editable', 'click', function() {
        $(this).attr('contenteditable', 'true')
    })
    $(document).delegate('.npf-editable', 'blur', function() {
        $(this).attr('contenteditable', 'false')
    })

    // 切换侧边栏
    $(function() {
        $('.aside-menu').click(toggleSidebar);
    })

    function toggleSidebar() {
        $('.aside-menu').toggleClass('cur');
        $('.tools-main').toggleClass('preview');
        return false;
    }

    // 工具栏跟随
    $(window).on('scroll', function() {
        var scrollTop = parseInt($(window).scrollTop());
        if (scrollTop >= 60) {
            $('.tools-sidebar').css('position', 'fixed')
        } else {
            $('.tools-sidebar').css('position', 'absolute')
        }
    });

    $('.btn-fold').toggle(function(event) {
        $(this).next('.form-list,.template-list').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, "slow").end().addClass('cur');
    }, function() {
        $(this).next('.form-list,.template-list').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, "slow").end().removeClass('cur');
    });

    // 为每个模块添加操作
    // 向上移动
    $(document).delegate('.btn-up', 'click', function() {
        var $parent = $(this).parents('.npf-mod-wrap');
        if ($parent.prev()) {
            $parent.after($parent.prev().clone())
            $parent.prev().remove();
        }
    })

    // 向下移动
    $(document).delegate('.btn-down', 'click', function() {
        var $parent = $(this).parents('.npf-mod-wrap');
        if ($parent.next().length > 0) {
            $parent.next().after($parent.clone())
            $parent.remove();
        }
    })

    // 删除该模块
    $(document).delegate('.btn-del', 'click', function() {
        var $parent = $(this).parents('.npf-mod-wrap');
        $parent.remove();
    })

    // 复制该模块
    var tooltip,
        hidetooltiptimer;

    function createtooltip() {
        tooltip = $('<div class="tooltips"></div>');
         tooltip[0].style.cssText =
             'position:absolute; background:#fff; color:#000; padding:4px;z-index:10000;' + 'border-radius:2px; font-size:12px;box-shadow:3px 3px 3px rgba(0,0,0,.4);' + 'opacity:0;transition:opacity 0.5s'
        tooltip[0].innerHTML = '复制成功!'
        $('body').append(tooltip)
    }

    // 显示  复制成功  提示
    function showtooltip(e) {
        var evt = e || event
        clearTimeout(hidetooltiptimer)
        tooltip[0].style.left = evt.pageX - 10 + 'px'
        tooltip[0].style.top = evt.pageY + 15 + 'px'
        tooltip[0].style.opacity = 1
        hidetooltiptimer = setTimeout(function() {
            $('.tooltips').remove()
        }, 500)
    }

    function copySelectionText() {
        var copysuccess;
        try {
            copysuccess = document.execCommand("copy")
        } catch (e) {
            copysuccess = false
        }
        return copysuccess
    }

    function copyfieldvalue(e) {
        createtooltip();
        var field = $('.copy-text')[0];


        field.focus();
        field.setSelectionRange(0, field.value.length)
        var copysuccess = copySelectionText();
        if (copysuccess) {
            showtooltip(e)
        }
    }

    $(document).delegate('.btn-copy', 'click', function() {
        var $parent = $(this).parents('.npf-mod-wrap');
        $parent.find('.dialog-manage').remove();
        $('.copy-text').val($parent.prop('outerHTML'));
        // copyfieldvalue(event)
    })


    // 图片可编辑提示
    $(document).delegate('.npf-pic-editable img', 'hover', function() {
        $(this).toggleClass("img-focus");
        return false;
    })

    // 获取图片地址
    var imgSrc = '';

    function handleReceive(event) {
        if (event.origin != "http://rocket.oa.com:8080") return;
        //处理数据
        imgSrc = event.data;
    }
    window.addEventListener("message", handleReceive, false);

    // 页面图片地址修改
    var _thisImg;
    $(document).delegate('.npf-pic-editable', 'click', function() {
        var _this = $(this);
        _thisImg = _this.find('img');

        // 将输入框文本置空
        $('.pic-module-edit').removeClass('none')
        $('.pic-module-btn').click(function() {
            _thisImg.attr('src', imgSrc)
            $('.pic-module-edit').addClass('none');
            $('.pic-module-btn').unbind();
        })
        $('.btn.cancel').click(function() {
            $('.pic-module-edit').addClass('none');
            $('.btn.cancel').unbind();
        });
    })

    // svg内容替换
    var _thisSvg;
    var $thisCon;
    $('body').on('click', '.npf-svg-editable', function() {
        $thisCon = $(this);
        _thisSvg = $thisCon.find('svg');
        $('.svg-module-edit').removeClass('none')
        // 每次都清空输入框
        $(".svg-edit-cont").val('')

        // 将输入框文本置空
        $('.svg-module-btn').click(function() {
            var svgCont = $(".svg-edit-cont").val();
            $thisCon.html(svgCont)
            $('.svg-module-edit').addClass('none');
            $('.svg-module-edit').unbind();
        })

        $('.btn.cancel').click(function() {
            $('.svg-module-edit').addClass('none');
            $('.btn.cancel').unbind();
        });

    });




    // 微信分享输入框添加地址
    $('.weixin-pic').click(function() {
        $('.pic-module-edit').removeClass('none')
        $('.pic-module-btn').click(function() {
            $('.weixin-pic').attr('value', imgSrc)
            $('.pic-module-edit').addClass('none');
        })
        $('.btn.cancel').click(function() {
            $('.pic-module-edit').addClass('none');
            $('.btn.cancel').unbind();
        });
    })

    // 换肤功能
    $('.sel-color.default').click(function() {
        $('.npf-skin-wrap').attr('class', 'npf-skin-wrap default')
    });
    $('.sel-color.lite-blue').click(function() {
        $('.npf-skin-wrap').attr('class', 'npf-skin-wrap npf-skin-lite-blue')
    });
    $('.sel-color.blue').click(function() {
        $('.npf-skin-wrap').attr('class', 'npf-skin-wrap npf-skin-blue')
    });
});

function save2Local() {
    localStorage.setItem('html', $('.html-view').html());
}

// 3 秒自动保存一次到本地
var autoSave = setInterval(function() {
    save2Local()
}, 3000)

// 第二次进来检查本地保存有数据，则自动恢复
if (localStorage.getItem('html')) {
    $('.html-view').html(localStorage.getItem('html'));
}

// 保存按钮
$('.btn-download').click(function() {

    // 去掉因为编辑文字、图片添加的类名
    var contentHtml = $('.html-view').clone().find('*').removeClass('npf-editable npf-pic-editable').removeAttr('contenteditable').end().html()

    // 微信分享
    var weixinShare = '<input type="hidden" value="' + $('.weixin-pic').val() + '" id="shareThumbnail">' +
        '<script src="//imgcache.qq.com/open_proj/proj_qcloud_v2/js/wechat-share.js" charset="utf-8"></script>';

    // 页面代码汇总拼接
    oName = 'index.html',
        oContent = '<!DOCTYPE html><html lang="zh-cmn-Hans"><head><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"><title>' + $('.inf-title').val() + '</title><meta name="keywords" content="' + $('.inf-keywords').val() + '"><meta name="description" content="' + $('.inf-description').val() + '"><link href="https://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/portal/css/global.css" rel="stylesheet" /><link href="https://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/event/npf-v2/template/css/npf-v2.css" rel="stylesheet" /><link rel="import" href="http://10.198.14.14/open_proj/proj_qcloud_v2/gateway/event/pc/npf/qcloud-tpl.html"></head><body>' + '<div id="qcc_header"><qcc-header></qcc-header></div>' + contentHtml + '<div id="qcc_footer"><qcc-footer></qcc-footer></div>' + '<script type="text/javascript" src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/event/pc/npf/js/jquery.js"></script>' + '<script type="text/javascript" src="http://10.100.65.223/open_proj/proj_qcloud_v2/gateway/qcc-template/qcc-dev.js"></script>' + '<script type="text/javascript" src="http://119.29.8.64/source/nicklu/special-tools-v2/npf.js"></script>' + weixinShare + '</body></html>';

    var blob = new Blob([oContent], {
        type: "text/plain;charset=utf-8"
    });

    saveAs(blob, oName);
})

// 清空按钮，用于清空页面
$('.btn-empty').click(function() {
    $('.npf-skin-wrap').empty();
    localStorage.setItem('html', $('.html-view').html());
});

$(function() {
    $('body').append('<script src="npf.js"></script>');
});

$('.btn-scene').click(function() {
    setTimeout(function() {
        var prevBtn = document.getElementById('prev'),
            nextBtn = document.getElementById('next');
        //$(window).resize(function(){
        var $winWidth = $(window).outerWidth();
        if (document.getElementById('slider') != null) {
            if ($winWidth >= '768') {
                window.mySwipe = new Swipe(document.getElementById('slider'), {
                    startSlide: 0,
                    speed: 400,
                    auto: false,
                    continuous: false,
                    disableScroll: false,
                    stopPropagation: false,
                    callback: function(index, elem) {},
                    transitionEnd: function(index, elem) {}
                });
                prevBtn.onclick = mySwipe.prev;
                nextBtn.onclick = mySwipe.next;
            }
        }
        // })
    }, 500)
});








