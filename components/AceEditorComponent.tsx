import AceEditor, { IAceEditorProps } from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-abap';
import 'ace-builds/src-noconflict/mode-abc';
import 'ace-builds/src-noconflict/mode-actionscript';
import 'ace-builds/src-noconflict/mode-ada';
import 'ace-builds/src-noconflict/mode-alda';
import 'ace-builds/src-noconflict/mode-apache_conf';
import 'ace-builds/src-noconflict/mode-apex';
import 'ace-builds/src-noconflict/mode-applescript';
import 'ace-builds/src-noconflict/mode-aql';
import 'ace-builds/src-noconflict/mode-asciidoc';
import 'ace-builds/src-noconflict/mode-asl';
import 'ace-builds/src-noconflict/mode-assembly_x86';
import 'ace-builds/src-noconflict/mode-autohotkey';
import 'ace-builds/src-noconflict/mode-batchfile';
import 'ace-builds/src-noconflict/mode-c9search';
import 'ace-builds/src-noconflict/mode-cirru';
import 'ace-builds/src-noconflict/mode-clojure';
import 'ace-builds/src-noconflict/mode-cobol';
import 'ace-builds/src-noconflict/mode-coffee';
import 'ace-builds/src-noconflict/mode-coldfusion';
import 'ace-builds/src-noconflict/mode-crystal';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-csound_document';
import 'ace-builds/src-noconflict/mode-csound_orchestra';
import 'ace-builds/src-noconflict/mode-csound_score';
import 'ace-builds/src-noconflict/mode-csp';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-curly';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-d';
import 'ace-builds/src-noconflict/mode-dart';
import 'ace-builds/src-noconflict/mode-diff';
import 'ace-builds/src-noconflict/mode-django';
import 'ace-builds/src-noconflict/mode-dockerfile';
import 'ace-builds/src-noconflict/mode-dot';
import 'ace-builds/src-noconflict/mode-drools';
import 'ace-builds/src-noconflict/mode-edifact';
import 'ace-builds/src-noconflict/mode-eiffel';
import 'ace-builds/src-noconflict/mode-ejs';
import 'ace-builds/src-noconflict/mode-elixir';
import 'ace-builds/src-noconflict/mode-elm';
import 'ace-builds/src-noconflict/mode-erlang';
import 'ace-builds/src-noconflict/mode-forth';
import 'ace-builds/src-noconflict/mode-fortran';
import 'ace-builds/src-noconflict/mode-fsharp';
import 'ace-builds/src-noconflict/mode-fsl';
import 'ace-builds/src-noconflict/mode-ftl';
import 'ace-builds/src-noconflict/mode-gcode';
import 'ace-builds/src-noconflict/mode-gherkin';
import 'ace-builds/src-noconflict/mode-gitignore';
import 'ace-builds/src-noconflict/mode-glsl';
import 'ace-builds/src-noconflict/mode-gobstones';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-graphqlschema';
import 'ace-builds/src-noconflict/mode-groovy';
import 'ace-builds/src-noconflict/mode-haml';
import 'ace-builds/src-noconflict/mode-handlebars';
import 'ace-builds/src-noconflict/mode-haskell';
import 'ace-builds/src-noconflict/mode-haskell_cabal';
import 'ace-builds/src-noconflict/mode-haxe';
import 'ace-builds/src-noconflict/mode-hjson';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-html_elixir';
import 'ace-builds/src-noconflict/mode-html_ruby';
import 'ace-builds/src-noconflict/mode-ini';
import 'ace-builds/src-noconflict/mode-io';
import 'ace-builds/src-noconflict/mode-jack';
import 'ace-builds/src-noconflict/mode-jade';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-json5';
import 'ace-builds/src-noconflict/mode-jsoniq';
import 'ace-builds/src-noconflict/mode-jsp';
import 'ace-builds/src-noconflict/mode-jssm';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/mode-julia';
import 'ace-builds/src-noconflict/mode-kotlin';
import 'ace-builds/src-noconflict/mode-latex';
import 'ace-builds/src-noconflict/mode-less';
import 'ace-builds/src-noconflict/mode-liquid';
import 'ace-builds/src-noconflict/mode-lisp';
import 'ace-builds/src-noconflict/mode-livescript';
import 'ace-builds/src-noconflict/mode-logiql';
import 'ace-builds/src-noconflict/mode-logtalk';
import 'ace-builds/src-noconflict/mode-lsl';
import 'ace-builds/src-noconflict/mode-lua';
import 'ace-builds/src-noconflict/mode-luapage';
import 'ace-builds/src-noconflict/mode-lucene';
import 'ace-builds/src-noconflict/mode-makefile';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-mask';
import 'ace-builds/src-noconflict/mode-matlab';
import 'ace-builds/src-noconflict/mode-maze';
import 'ace-builds/src-noconflict/mode-mediawiki';
import 'ace-builds/src-noconflict/mode-mel';
import 'ace-builds/src-noconflict/mode-mixal';
import 'ace-builds/src-noconflict/mode-mushcode';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/mode-nginx';
import 'ace-builds/src-noconflict/mode-nim';
import 'ace-builds/src-noconflict/mode-nix';
import 'ace-builds/src-noconflict/mode-nsis';
import 'ace-builds/src-noconflict/mode-nunjucks';
import 'ace-builds/src-noconflict/mode-objectivec';
import 'ace-builds/src-noconflict/mode-ocaml';
import 'ace-builds/src-noconflict/mode-pascal';
import 'ace-builds/src-noconflict/mode-perl';
import 'ace-builds/src-noconflict/mode-pgsql';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/mode-php_laravel_blade';
import 'ace-builds/src-noconflict/mode-pig';
import 'ace-builds/src-noconflict/mode-plain_text';
import 'ace-builds/src-noconflict/mode-powershell';
import 'ace-builds/src-noconflict/mode-praat';
import 'ace-builds/src-noconflict/mode-prisma';
import 'ace-builds/src-noconflict/mode-prolog';
import 'ace-builds/src-noconflict/mode-properties';
import 'ace-builds/src-noconflict/mode-protobuf';
import 'ace-builds/src-noconflict/mode-puppet';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-qml';
import 'ace-builds/src-noconflict/mode-r';
import 'ace-builds/src-noconflict/mode-razor';
import 'ace-builds/src-noconflict/mode-rdoc';
import 'ace-builds/src-noconflict/mode-red';
import 'ace-builds/src-noconflict/mode-redshift';
import 'ace-builds/src-noconflict/mode-rhtml';
import 'ace-builds/src-noconflict/mode-rst';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-sass';
import 'ace-builds/src-noconflict/mode-scad';
import 'ace-builds/src-noconflict/mode-scala';
import 'ace-builds/src-noconflict/mode-scheme';
import 'ace-builds/src-noconflict/mode-scss';
import 'ace-builds/src-noconflict/mode-sh';
import 'ace-builds/src-noconflict/mode-sjs';
import 'ace-builds/src-noconflict/mode-slim';
import 'ace-builds/src-noconflict/mode-smarty';
import 'ace-builds/src-noconflict/mode-snippets';
import 'ace-builds/src-noconflict/mode-soy_template';
import 'ace-builds/src-noconflict/mode-space';
import 'ace-builds/src-noconflict/mode-sparql';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/mode-sqlserver';
import 'ace-builds/src-noconflict/mode-stylus';
import 'ace-builds/src-noconflict/mode-svg';
import 'ace-builds/src-noconflict/mode-swift';
import 'ace-builds/src-noconflict/mode-tcl';
import 'ace-builds/src-noconflict/mode-terraform';
import 'ace-builds/src-noconflict/mode-tex';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/mode-textile';
import 'ace-builds/src-noconflict/mode-toml';
import 'ace-builds/src-noconflict/mode-tsx';
import 'ace-builds/src-noconflict/mode-turtle';
import 'ace-builds/src-noconflict/mode-twig';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-vala';
import 'ace-builds/src-noconflict/mode-vbscript';
import 'ace-builds/src-noconflict/mode-velocity';
import 'ace-builds/src-noconflict/mode-verilog';
import 'ace-builds/src-noconflict/mode-vhdl';
import 'ace-builds/src-noconflict/mode-visualforce';
import 'ace-builds/src-noconflict/mode-wollok';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-xquery';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/mode-zeek';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/ext-language_tools';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { darkModeState } from 'context/state/layout.atom';

const AceEditorComponent: FC<IAceEditorProps> = props => {
  const lineAmount = props.value?.split('\n').length ?? 0;
  const heightPrediction = lineAmount * 21.2;
  const height = heightPrediction < 300 ? 300 : heightPrediction;
  const darkMode = useRecoilValue(darkModeState);
  return (
    <div>
      <AceEditor
        mode="javascript"
        theme={darkMode ? 'monokai' : 'xcode'}
        height={`${height}px`}
        width="calc(100% - 24px)"
        fontSize={16}
        enableBasicAutocompletion
        enableSnippets
        enableLiveAutocompletion
        {...props}
        style={{
          backgroundColor: 'transparent',
          minHeight: '300px',
          marginLeft: 12,
          marginRight: 12,
          ...props.style,
        }}
        setOptions={{
          showLineNumbers: false,
          showGutter: false,
          printMargin: false,
          fontFamily: 'Roboto Mono, Consolas, "monospaced"',

          ...props.setOptions,
        }}
      />
    </div>
  );
};

export default AceEditorComponent;
