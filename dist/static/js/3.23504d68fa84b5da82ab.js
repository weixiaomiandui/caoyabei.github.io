webpackJsonp([3],{"3diZ":function(t,n){},"Sgn/":function(t,n,e){"use strict";n.b=function(){var t=s()({},r.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq",g_tk:1664029744});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,r.c)},n.a=function(t){var n=s()({},r.b,{g_tk:5381,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,order:"listen",begin:0,num:100,songstatus:1,singermid:t});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",n,r.c)};var i=e("woOf"),s=e.n(i),a=e("Gak4"),r=e("T452")},lEJ1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),a=e("NYxO"),r=e("Sgn/"),c=e("bSLr"),o=e("EYLy"),g=e("T452"),u={name:"singer-detail",data:function(){return{songs:[]}},components:{musicList:e("kvay").a},created:function(){this._getDetail()},computed:s()({},Object(a.c)(["singer"])),methods:{_getDetail:function(){var t=this;this.singer.id||this.$router.push("/singer"),Object(r.a)(this.singer.id).then(function(n){n.code===g.a&&Object(o.a)(t._normalizeSongs(n.data.list)).then(function(n){t.songs=n})})},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){n.push(Object(c.a)(t.musicData))}),n}}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.singer.name,"bg-image":this.singer.avatar,songs:this.songs}})],1)},staticRenderFns:[]};var d=e("VU/8")(u,l,!1,function(t){e("3diZ")},"data-v-2aa88e4d",null);n.default=d.exports}});
//# sourceMappingURL=3.23504d68fa84b5da82ab.js.map