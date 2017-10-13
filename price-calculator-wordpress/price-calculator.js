(function() {
   tinymce.create('tinymce.plugins.price_calculator', {
      init : function(ed, url) {
         ed.addButton('price_calculator', {
            title : 'Price Calculator',
            image : url+'/calculator-icon.png',
            onclick : function() {
               var levels = prompt("Enter developer level values, separated by comma", "Level1,Level2,Level3").split(',')
               var types = prompt("Enter developer type values, separated by comma", "Type1,Type2,Type3").split(',')
               var skills = prompt("Enter developer skills values, separated by comma", "Skill1,Skill2,Skill3").split(',')

               ed.execCommand('mceInsertContent', false, '[price-calculator levels="' + levels + '" types="' + types + '" skills="' + skills + '"]')
            }
         });
      },

      createControl : function(n, cm) {
         return null;
      },
      
      getInfo : function() {
         return {
            longname : "Price Calculator",
            author : 'Konstantin Golosov',
            authorurl : 'mailto:kongol.ml@gmail.com',
            infourl : '',
            version : "1.0"
         };
      }
   });
   tinymce.PluginManager.add('price_calculator', tinymce.plugins.price_calculator);
})();