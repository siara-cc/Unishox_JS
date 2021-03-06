const UNISHOX_VERSION = "2.0"

const USX_HCODES_DFLT = [0x00, 0x40, 0x80, 0xC0, 0xE0];
const USX_HCODE_LENS_DFLT = [2, 2, 2, 3, 3];

const USX_HCODES_ALPHA_ONLY = [0x00, 0x00, 0x00, 0x00, 0x00];
const USX_HCODE_LENS_ALPHA_ONLY = [0, 0, 0, 0, 0];

const USX_HCODES_ALPHA_NUM_ONLY = [0x00, 0x00, 0x80, 0x00, 0x00];
const USX_HCODE_LENS_ALPHA_NUM_ONLY = [1, 0, 1, 0, 0];

const USX_HCODES_ALPHA_NUM_SYM_ONLY = [0x00, 0x80, 0xC0, 0x00, 0x00];
const USX_HCODE_LENS_ALPHA_NUM_SYM_ONLY = [1, 2, 2, 0, 0];

const USX_HCODES_FAVOR_ALPHA = [0x00, 0x80, 0xA0, 0xC0, 0xE0];
const USX_HCODE_LENS_FAVOR_ALPHA = [1, 3, 3, 3, 3];

const USX_HCODES_FAVOR_DICT = [0x00, 0x40, 0xC0, 0x80, 0xE0];
const USX_HCODE_LENS_FAVOR_DICT = [2, 2, 3, 2, 3];

const USX_HCODES_FAVOR_SYM = [0x80, 0x00, 0xA0, 0xC0, 0xE0];
const USX_HCODE_LENS_FAVOR_SYM = [3, 1, 3, 3, 3];

//[{0x00, 0x40, 0xE0, 0xC0, 0x80}],
//[{2, 2, 3, 3, 2}],

const USX_HCODES_FAVOR_UMLAUT = [0x80, 0xA0, 0xC0, 0xE0, 0x00];
const USX_HCODE_LENS_FAVOR_UMLAUT = [3, 3, 3, 3, 1];

const USX_HCODES_NO_DICT = [0x00, 0x40, 0x80, 0x00, 0xC0];
const USX_HCODE_LENS_NO_DICT = [2, 2, 2, 0, 2];

const USX_HCODES_NO_UNI = [0x00, 0x40, 0x80, 0xC0, 0x00];
const USX_HCODE_LENS_NO_UNI = [2, 2, 2, 2, 0];

const USX_FREQ_SEQ_DFLT = ["\": \"", "\": ", "</", "=\"", "\":\"", "://"];
const USX_FREQ_SEQ_TXT = [" the ", " and ", "tion", " with", "ing", "ment"];
const USX_FREQ_SEQ_URL = ["https://", "www.", ".com", "http://", ".org", ".net"];
const USX_FREQ_SEQ_JSON = ["\": \"", "\": ", "\",", "}}}", "\":\"", "}}"];
const USX_FREQ_SEQ_HTML = ["</", "=\"", "div", "href", "class", "<p>"];
const USX_FREQ_SEQ_XML = ["</", "=\"", "\">", "<?xml version=\"1.0\"", "xmlns:", "://"];

const USX_TEMPLATES = ["tfff-of-tfTtf:rf:rf.fffZ", "tfff-of-tf", "(fff) fff-ffff", "tf:rf:rf", 0];

const USX_PSETS = [
  [USX_HCODES_DFLT, USX_HCODE_LENS_DFLT, USX_FREQ_SEQ_DFLT],                             // 0  USX_PSET_DFLT
  [USX_HCODES_ALPHA_ONLY, USX_HCODE_LENS_ALPHA_ONLY, USX_FREQ_SEQ_TXT],                  // 1  USX_PSET_ALPHA_ONLY
  [USX_HCODES_ALPHA_NUM_ONLY, USX_HCODE_LENS_ALPHA_NUM_ONLY, USX_FREQ_SEQ_TXT],          // 2  USX_PSET_ALPHA_NUM_ONLY
  [USX_HCODES_ALPHA_NUM_SYM_ONLY, USX_HCODE_LENS_ALPHA_NUM_SYM_ONLY, USX_FREQ_SEQ_DFLT], // 3  USX_PSET_ALPHA_NUM_SYM_ONLY
  [USX_HCODES_ALPHA_NUM_SYM_ONLY, USX_HCODE_LENS_ALPHA_NUM_SYM_ONLY, USX_FREQ_SEQ_DFLT], // 4  USX_PSET_ALPHA_NUM_SYM_ONLY_TXT
  [USX_HCODES_FAVOR_ALPHA, USX_HCODE_LENS_FAVOR_ALPHA, USX_FREQ_SEQ_TXT],                // 5  USX_PSET_FAVOR_ALPHA
  [USX_HCODES_FAVOR_DICT, USX_HCODE_LENS_FAVOR_DICT, USX_FREQ_SEQ_DFLT],                 // 6  USX_PSET_FAVOR_DICT
  [USX_HCODES_FAVOR_SYM, USX_HCODE_LENS_FAVOR_SYM, USX_FREQ_SEQ_DFLT],                   // 7  USX_PSET_FAVOR_SYM
  [USX_HCODES_FAVOR_UMLAUT, USX_HCODE_LENS_FAVOR_UMLAUT, USX_FREQ_SEQ_DFLT],             // 8  USX_PSET_FAVOR_UMLAUT
  [USX_HCODES_NO_DICT, USX_HCODE_LENS_NO_DICT, USX_FREQ_SEQ_DFLT],                       // 9  USX_PSET_NO_DICT
  [USX_HCODES_NO_UNI, USX_HCODE_LENS_NO_UNI, USX_FREQ_SEQ_DFLT],                         // 10 USX_PSET_NO_UNI
  [USX_HCODES_NO_UNI, USX_HCODE_LENS_NO_UNI, USX_FREQ_SEQ_TXT],                          // 11 USX_PSET_NO_UNI_FAVOR_TEXT
  [USX_HCODES_DFLT, USX_HCODE_LENS_DFLT, USX_FREQ_SEQ_URL],                              // 12 USX_PSET_URL
  [USX_HCODES_DFLT, USX_HCODE_LENS_DFLT, USX_FREQ_SEQ_JSON],                             // 13 USX_PSET_JSON
  [USX_HCODES_NO_UNI, USX_HCODE_LENS_NO_UNI, USX_FREQ_SEQ_JSON],                         // 14 USX_PSET_JSON_NO_UNI
  [USX_HCODES_DFLT, USX_HCODE_LENS_DFLT, USX_FREQ_SEQ_XML],                              // 15 USX_PSET_XML
  [USX_HCODES_DFLT, USX_HCODE_LENS_DFLT, USX_FREQ_SEQ_HTML]];                            // 16 USX_PSET_HTML

const usx = require('./unishox2');
var fs = require("fs");

function unishox2_compress_preset(input, len, out, pset) {
  return usx.unishox2_compress(input, len, out, USX_PSETS[pset][0], USX_PSETS[pset][1], USX_PSETS[pset][2], USX_TEMPLATES);
}

function unishox2_decompress_preset(input, len, out, pset) {
  return usx.unishox2_decompress(input, len, out, USX_PSETS[pset][0], USX_PSETS[pset][1], USX_PSETS[pset][2], USX_TEMPLATES);
}

var args = process.argv.slice(1);
argv = args.length;

var cbuf = new Uint8Array(4096);
var dbuf = new Uint8Array(8192);

var len, tot_len, clen, ctot, dlen, l;
var perc;
var fp, wfp;
var bytes_read;

if (argv >= 4 && args[1] == "-c") {
   var preset = 0;
   if (argv > 4)
     preset = parseInt(args[4], 10);
   tot_len = 0;
   ctot = 0;
   try {
     fp = fs.openSync(args[2], "r");
   } catch (e) {
     console.log(e);
     return;
   }
   try {
     wfp = fs.openSync(args[3], "w+");
   } catch (e) {
     console.log(e);
     return;
   }
   do {
     bytes_read = fs.readSync(fp, cbuf, 0, cbuf.length, null);
     if (bytes_read > 0) {
        clen = unishox2_compress_preset(cbuf, bytes_read, dbuf, preset);
        ctot += clen;
        tot_len += bytes_read;
        if (clen > 0) {
           fs.writeSync(wfp, new Uint8Array([clen >> 8]), 0, 1, null);
           fs.writeSync(wfp, new Uint8Array([clen & 0xFF]), 0, 1, null);
           if (clen != fs.writeSync(wfp, dbuf, 0, clen, null)) {
              return 1;
           }
        }
     }
   } while (bytes_read > 0);
   perc = (tot_len-ctot);
   perc /= tot_len;
   perc *= 100;
   console.log("\nBytes (Compressed/Original=Savings%%): %ld/%ld=", ctot, tot_len);
   console.log("%.2f%%", perc);
} else
if (argv >= 4 && args[1] == "-d") {
   var preset = 0;
   if (argv > 4)
     preset = parseInt(args[4], 10);
   try {
     fp = fs.openSync(args[2], "r");
   } catch (e) {
     console.log(e);
     return;
   }
   try {
     wfp = fs.openSync(args[3], "w+");
   } catch (e) {
     console.log(e);
     return;
   }
   do {
     //memset(dbuf, 0, sizeof(dbuf));
     bytes_read = fs.readSync(fp, dbuf, 0, 2, null);
     if (bytes_read == 0)
       break;
     var len_to_read = dbuf[0] << 8;
     len_to_read += dbuf[1];
     bytes_read = fs.readSync(fp, dbuf, 0, len_to_read, null);
     if (bytes_read > 0) {
        dlen = unishox2_decompress_preset(dbuf, bytes_read, cbuf, preset);
        if (dlen > 0) {
           if (dlen != fs.writeSync(wfp, cbuf, 0, dlen, null)) {
              console.log("error writing file");
              return 1;
           }
        }
     }
   } while (bytes_read > 0);
} else
if (argv >= 4 && (args[1] == "-g" || args[1] == "-G")) {
   var preset = 0;
   if (argv > 4)
     preset = parseInt(args[4], 10);
   if (args[1] == "-g")
     preset = 9; // = USX_PSET_NO_DICT;
     try {
      fp = fs.openSync(args[2], "r");
    } catch (e) {
      console.log(e);
      return;
    }
    try {
      wfp = fs.openSync(args[3] + ".js", "w+");
    } catch (e) {
      console.log(e);
      return;
    }
    tot_len = 0;
    ctot = 0;
    var prev_lines = [];
    var prev_lines_compressed = [];
    fs.writeSync(wfp, "// _UNISHOX2_COMPRESSED__");
    fs.writeSync(wfp, args[3]);
    fs.writeSync(wfp, "__\n");
    var line_ctr = 0;
    var max_len = 0;
    var cur_pos = 0;
    var max_line_length = 1024;
    fs.writeSync(wfp, "module.exports = [\n");
    while (fs.readSync(fp, cbuf, 0, max_line_length, cur_pos) != 0) {
      len = 0;
      while (cbuf[len] !== 13 && cbuf[len] !== 10)
        len++;
      cur_pos += len;
      cur_pos++;
      // compress the line and look in previous lines
      // add to linked list
      if (len > 0) {
        //prev_lines[line_ctr] = cbuf.slice(0, len);
        prev_lines[line_ctr] = new TextDecoder("UTF-8").decode(cbuf.slice(0, len));
        clen = unishox2_compress_preset(prev_lines, line_ctr, dbuf, preset);
        if (clen > 0) {
            perc = (len-clen);
            perc /= len;
            perc *= 100;
            //print_compressed(dbuf, clen);
            console.log("len: %ld/%ld=", clen, len);
            console.log("%.2f", perc);
            tot_len += len;
            ctot += clen;
            if (line_ctr > 0)
              fs.writeSync(wfp, ", \n");
            fs.writeSync(wfp, "new Uint8Array([");
            for (var i = 0; i < clen; i++)
              fs.writeSync(wfp, (i == 0 ? "" : ", ") + dbuf[i]);
            fs.writeSync(wfp, "])");
            if (len > max_len)
              max_len = len;
            prev_lines_compressed[line_ctr] = dbuf.slice(0, clen);
            console.log(unishox2_decompress_preset(prev_lines_compressed, line_ctr, null, preset));
        }
        line_ctr++;
      }
    }
    fs.writeSync(wfp, "];\n");
    perc = (tot_len-ctot);
    perc /= tot_len;
    perc *= 100;
    console.log("\nBytes (Compressed/Original=Savings%%): %ld/%ld=", ctot, tot_len);
    console.log("%.2f%%", perc);
} else
if (argv == 2 || (argv == 3 && parseInt(args[2], 10) > 0)) {
  var pset = 0;
  if (argv > 2)
    pset = parseInt(args[2], 10);
  var buf_len = usx.unishox2_compress(args[1], args[1].length, dbuf, USX_PSETS[pset][0], USX_PSETS[pset][1], USX_PSETS[pset][2], USX_TEMPLATES);
  var out_str = usx.unishox2_decompress(dbuf, buf_len, null, USX_PSETS[pset][0], USX_PSETS[pset][1], USX_PSETS[pset][2], USX_TEMPLATES);
  var input_len = encodeURI(args[1]).split(/%..|./).length - 1;
  console.log("");
  console.log("Input: " + args[1]);
  console.log("");
  console.log("Compressed (Uint8Array) : " + dbuf.slice(0, buf_len));
  console.log("");
  console.log("Decompressed: " + out_str);
  console.log("");
  console.log("Compression ratio:(" + buf_len + "/" + input_len + " = " + (Math.round((input_len-buf_len)*1000/input_len) / 10) + "% savings)");
  console.log("");
} else
if (argv >= 4 && (args[1] == "-a" || args[1] == "-A")) {
   var preset = 0;
   if (argv > 4)
     preset = parseInt(args[4], 10);
   if (args[1] == "-a")
     preset = 9; // = USX_PSET_NO_DICT;
   var prev_lines_arr = require(args[2]);
   console.log(unishox2_decompress_preset(prev_lines_arr, parseInt(args[3], 10), null, preset));
} else
if (argv == 2 || (argv == 3 && parseInt(args[2], 10) > 0)) {
  var pset = 0;
  if (argv > 2)
    pset = parseInt(args[2], 10);
  var buf_len = usx.unishox2_compress(args[1], args[1].length, dbuf, USX_PSETS[pset][0], USX_PSETS[pset][1], USX_PSETS[pset][2], USX_TEMPLATES);
  var out_str = usx.unishox2_decompress(dbuf, buf_len, null, USX_PSETS[pset][0], USX_PSETS[pset][1], USX_PSETS[pset][2], USX_TEMPLATES);
  var input_len = encodeURI(args[1]).split(/%..|./).length - 1;
  console.log("");
  console.log("Input: " + args[1]);
  console.log("");
  console.log("Compressed (Uint8Array) : " + dbuf.slice(0, buf_len));
  console.log("");
  console.log("Decompressed: " + out_str);
  console.log("");
  console.log("Compression ratio:(" + buf_len + "/" + input_len + " = " + (Math.round((input_len-buf_len)*1000/input_len) / 10) + "% savings)");
  console.log("");
} else {
   console.log("Unishox (byte format version: %s)", UNISHOX_VERSION);
   console.log("----------------------------------");
   console.log("Usage: node demo_unishox2 \"string\" [preset_number]");
   console.log("              (or)");
   console.log("       unishox2 [action] [in_file] [out_file] [preset_number]");
   console.log("");
   console.log("         [action]:");
   console.log("         -t    run tests");
   console.log("         -c    compress");
   console.log("         -d    decompress");
   console.log("         -g    generate Uint8Array file");
   console.log("         -G    generate Uint8Array file using additional compression (slower)");
   console.log("         -a    Decompress specific line of a file generated with -g");
   console.log("         -A    Decompress specific line of a file generated with -G");
   console.log("");
   console.log("         [preset_number]:");
   console.log("         0    Optimum - favors all including JSON, XML, URL and HTML (default)");
   console.log("         1    Alphabets [a-z], [A-Z] and space only");
   console.log("         2    Alphanumeric [a-z], [A-Z], [0-9], [.,/()-=+$%%#] and space only");
   console.log("         3    Alphanumeric and symbols only");
   console.log("         4    Alphanumeric and symbols only (Favor English text)");
   console.log("         5    Favor Alphabets");
   console.log("         6    Favor Dictionary coding");
   console.log("         7    Favor Symbols");
   console.log("         8    Favor Umlaut");
   console.log("         9    No dictionary");
   console.log("         10   No Unicode");
   console.log("         11   No Unicode, favour English text");
   console.log("         12   Favor URLs");
   console.log("         13   Favor JSON");
   console.log("         14   Favor JSON (No Unicode)");
   console.log("         15   Favor XML");
   console.log("         16   Favor HTML");
   return 1;
}
