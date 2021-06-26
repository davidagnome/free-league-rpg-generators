// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// character_generator.js
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

  var gen_data = {};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generator function

  function generate_text (type) {
    var list; if (list = gen_data[type]) {
      var string; if (string = select_from(list)) {
        return expand_tokens(string);
      }
    }
    return '';
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generate multiple

  function generate_list (type, n_of) {
    var list = [];

    var i; for (i = 0; i < n_of; i++) {
      list.push(generate_text(type));
    }
    return list;
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// select from list

  function select_from (list) {
    if (list.constructor == Array) {
      return select_from_array(list);
    } else {
      return select_from_table(list);
    }
  }
  function select_from_array (list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  function select_from_table (list) {
    var len; if (len = scale_table(list)) {
      var idx = Math.floor(Math.random() * len) + 1;

      var key; for (key in list) {
        var r = key_range(key);
        if (idx >= r[0] && idx <= r[1]) { return list[key]; }
      }
    }
    return '';
  }
  function scale_table (list) {
    var len = 0;

    var key; for (key in list) {
      var r = key_range(key);
      if (r[1] > len) { len = r[1]; }
    }
    return len;
  }
  function key_range (key) {
    var match; if (match = /(\d+)-00/.exec(key)) {
      return [ parseInt(match[1]), 100 ];
    } else if (match = /(\d+)-(\d+)/.exec(key)) {
      return [ parseInt(match[1]), parseInt(match[2]) ];
    } else if (key == '00') {
      return [ 100, 100 ];
    } else {
      return [ parseInt(key), parseInt(key) ];
    }
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// expand {token} in string

  function expand_tokens (string) {
    var match; while (match = /{(\w+)}/.exec(string)) {
      var token = match[1];

      var repl; if (repl = generate_text(token)) {
        string = string.replace('{'+token+'}',repl);
      } else {
        string = string.replace('{'+token+'}',token);
      }
    }
    return string;
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function more_random(){
    var a=document.getElementById("output"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("main",b);
    a.value=b.join("\n");
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function more_plot(){
    var a=document.getElementById("plot_output"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("plots",b);
    b=JSON.parse(JSON.stringify(b));
    a.value=b.join("\n\n");
};


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function more_tor_sites(){
    var a=document.getElementById("tor_site_output"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("tor_sites",b);
    b=JSON.parse(JSON.stringify(b));
    a.value=b.join("\n\n");
};

function more_tor_characters(){
    var a=document.getElementById("tor_character_output"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("tor_characters",b);
    a.value=b.join("\n");
};

function more_fl_sites(){
    var a=document.getElementById("fl_site_output"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("fl_adventure_site_type",b);
    b=JSON.parse(JSON.stringify(b));
    a.value=b.join("\n\n");
};


function more_fl_inns(){
    var a=document.getElementById("fl_inn_output"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("fl_inn",b);
    b=JSON.parse(JSON.stringify(b));
    a.value=b.join("\n\n");
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function more_gender(){
    var a=document.getElementById("gender"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("gender",b);
    a.value=b.join("\n")
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function more_archetype(){
    var a=document.getElementById("archetype"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("archetype",b);
    a.value=b.join("\n")
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function more_weapon(){
    var a=document.getElementById("weapon"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("weapon",b);
    a.value=b.join("\n")
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function more_armor(){
    var a=document.getElementById("armor"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("armor",b);
    a.value=b.join("\n")
};


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function more_biome(){
    var a=document.getElementById("biome"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("biome",b);
    a.value=b.join("\n")
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function more_settlement(){
    var a=document.getElementById("settlement"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("settlement",b);
    a.value=b.join("\n")
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function more_motivation(){
    var a=document.getElementById("motivation"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("motivation",b);
    a.value=b.join("\n")
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function more_hope(){
    var a=document.getElementById("hope"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("hope",b);
    a.value=b.join("\n")
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function more_fear(){
    var a=document.getElementById("fear"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list("fear",b);
    a.value=b.join("\n")
};