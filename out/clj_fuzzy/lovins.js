// Compiled by ClojureScript 1.9.229 {}
goog.provide('clj_fuzzy.lovins');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clj_fuzzy.helpers');
clj_fuzzy.lovins.endings = cljs.core.list(/alistically$/,new cljs.core.Keyword(null,"B","B",-1422503380),/arizability$/,new cljs.core.Keyword(null,"A","A",-1688942394),/izationally$/,new cljs.core.Keyword(null,"B","B",-1422503380),/antialness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/arisations$/,new cljs.core.Keyword(null,"A","A",-1688942394),/arizations$/,new cljs.core.Keyword(null,"A","A",-1688942394),/entialness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/allically$/,new cljs.core.Keyword(null,"C","C",-173629587),/antaneous$/,new cljs.core.Keyword(null,"A","A",-1688942394),/antiality$/,new cljs.core.Keyword(null,"A","A",-1688942394),/arisation$/,new cljs.core.Keyword(null,"A","A",-1688942394),/arization$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ationally$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ativeness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/eableness$/,new cljs.core.Keyword(null,"E","E",230849842),/entations$/,new cljs.core.Keyword(null,"A","A",-1688942394),/entiality$/,new cljs.core.Keyword(null,"A","A",-1688942394),/entialize$/,new cljs.core.Keyword(null,"A","A",-1688942394),/entiation$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ionalness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/istically$/,new cljs.core.Keyword(null,"A","A",-1688942394),/itousness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/izability$/,new cljs.core.Keyword(null,"A","A",-1688942394),/izational$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ableness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/arizable$/,new cljs.core.Keyword(null,"A","A",-1688942394),/entation$/,new cljs.core.Keyword(null,"A","A",-1688942394),/entially$/,new cljs.core.Keyword(null,"A","A",-1688942394),/eousness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ibleness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icalness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ionalism$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ionality$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ionalize$/,new cljs.core.Keyword(null,"A","A",-1688942394),/iousness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/izations$/,new cljs.core.Keyword(null,"A","A",-1688942394),/lessness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ability$/,new cljs.core.Keyword(null,"A","A",-1688942394),/aically$/,new cljs.core.Keyword(null,"A","A",-1688942394),/alistic$/,new cljs.core.Keyword(null,"B","B",-1422503380),/alities$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ariness$/,new cljs.core.Keyword(null,"E","E",230849842),/aristic$/,new cljs.core.Keyword(null,"A","A",-1688942394),/arizing$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ateness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/atingly$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ational$/,new cljs.core.Keyword(null,"B","B",-1422503380),/atively$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ativism$/,new cljs.core.Keyword(null,"A","A",-1688942394),/elihood$/,new cljs.core.Keyword(null,"E","E",230849842),/encible$/,new cljs.core.Keyword(null,"A","A",-1688942394),/entally$/,new cljs.core.Keyword(null,"A","A",-1688942394),/entials$/,new cljs.core.Keyword(null,"A","A",-1688942394),/entiate$/,new cljs.core.Keyword(null,"A","A",-1688942394),/entness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/fulness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ibility$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icalism$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icalist$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icality$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icalize$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ication$/,new cljs.core.Keyword(null,"G","G",-738544397),/icianry$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ination$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ingness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ionally$/,new cljs.core.Keyword(null,"A","A",-1688942394),/isation$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ishness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/istical$/,new cljs.core.Keyword(null,"A","A",-1688942394),/iteness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/iveness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ivistic$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ivities$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ization$/,new cljs.core.Keyword(null,"F","F",-1115543258),/izement$/,new cljs.core.Keyword(null,"A","A",-1688942394),/oidally$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ousness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/aceous$/,new cljs.core.Keyword(null,"A","A",-1688942394),/acious$/,new cljs.core.Keyword(null,"B","B",-1422503380),/action$/,new cljs.core.Keyword(null,"G","G",-738544397),/alness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ancial$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ancies$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ancing$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ariser$/,new cljs.core.Keyword(null,"A","A",-1688942394),/arized$/,new cljs.core.Keyword(null,"A","A",-1688942394),/arizer$/,new cljs.core.Keyword(null,"A","A",-1688942394),/atable$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ations$/,new cljs.core.Keyword(null,"B","B",-1422503380),/atives$/,new cljs.core.Keyword(null,"A","A",-1688942394),/eature$/,new cljs.core.Keyword(null,"Z","Z",459124588),/efully$/,new cljs.core.Keyword(null,"A","A",-1688942394),/encies$/,new cljs.core.Keyword(null,"A","A",-1688942394),/encing$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ential$/,new cljs.core.Keyword(null,"A","A",-1688942394),/enting$/,new cljs.core.Keyword(null,"C","C",-173629587),/entist$/,new cljs.core.Keyword(null,"A","A",-1688942394),/eously$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ialist$/,new cljs.core.Keyword(null,"A","A",-1688942394),/iality$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ialize$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ically$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icance$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icians$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icists$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ifully$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ionals$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ionate$/,new cljs.core.Keyword(null,"D","D",-8015893),/ioning$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ionist$/,new cljs.core.Keyword(null,"A","A",-1688942394),/iously$/,new cljs.core.Keyword(null,"A","A",-1688942394),/istics$/,new cljs.core.Keyword(null,"A","A",-1688942394),/izable$/,new cljs.core.Keyword(null,"E","E",230849842),/lessly$/,new cljs.core.Keyword(null,"A","A",-1688942394),/nesses$/,new cljs.core.Keyword(null,"A","A",-1688942394),/oidism$/,new cljs.core.Keyword(null,"A","A",-1688942394),/acies$/,new cljs.core.Keyword(null,"A","A",-1688942394),/acity$/,new cljs.core.Keyword(null,"A","A",-1688942394),/aging$/,new cljs.core.Keyword(null,"B","B",-1422503380),/aical$/,new cljs.core.Keyword(null,"A","A",-1688942394),/alist$/,new cljs.core.Keyword(null,"A","A",-1688942394),/alism$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ality$/,new cljs.core.Keyword(null,"A","A",-1688942394),/alize$/,new cljs.core.Keyword(null,"A","A",-1688942394),/allic$/,new cljs.core.Keyword(null,"BB","BB",1873237105),/anced$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ances$/,new cljs.core.Keyword(null,"B","B",-1422503380),/antic$/,new cljs.core.Keyword(null,"C","C",-173629587),/arial$/,new cljs.core.Keyword(null,"A","A",-1688942394),/aries$/,new cljs.core.Keyword(null,"A","A",-1688942394),/arily$/,new cljs.core.Keyword(null,"A","A",-1688942394),/arity$/,new cljs.core.Keyword(null,"B","B",-1422503380),/arize$/,new cljs.core.Keyword(null,"A","A",-1688942394),/aroid$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ately$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ating$/,new cljs.core.Keyword(null,"I","I",1827140963),/ation$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ative$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ators$/,new cljs.core.Keyword(null,"A","A",-1688942394),/atory$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ature$/,new cljs.core.Keyword(null,"E","E",230849842),/early$/,new cljs.core.Keyword(null,"Y","Y",-560717356),/ehood$/,new cljs.core.Keyword(null,"A","A",-1688942394),/eless$/,new cljs.core.Keyword(null,"A","A",-1688942394),/elity$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ement$/,new cljs.core.Keyword(null,"A","A",-1688942394),/enced$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ences$/,new cljs.core.Keyword(null,"A","A",-1688942394),/eness$/,new cljs.core.Keyword(null,"E","E",230849842),/ening$/,new cljs.core.Keyword(null,"E","E",230849842),/ental$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ented$/,new cljs.core.Keyword(null,"C","C",-173629587),/ently$/,new cljs.core.Keyword(null,"A","A",-1688942394),/fully$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ially$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icant$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ician$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icide$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icism$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icist$/,new cljs.core.Keyword(null,"A","A",-1688942394),/icity$/,new cljs.core.Keyword(null,"A","A",-1688942394),/idine$/,new cljs.core.Keyword(null,"I","I",1827140963),/iedly$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ihood$/,new cljs.core.Keyword(null,"A","A",-1688942394),/inate$/,new cljs.core.Keyword(null,"A","A",-1688942394),/iness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ingly$/,new cljs.core.Keyword(null,"B","B",-1422503380),/inism$/,new cljs.core.Keyword(null,"J","J",1394734828),/inity$/,new cljs.core.Keyword(null,"CC","CC",-1077285628),/ional$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ioned$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ished$/,new cljs.core.Keyword(null,"A","A",-1688942394),/istic$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ities$/,new cljs.core.Keyword(null,"A","A",-1688942394),/itous$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ively$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ivity$/,new cljs.core.Keyword(null,"A","A",-1688942394),/izers$/,new cljs.core.Keyword(null,"F","F",-1115543258),/izing$/,new cljs.core.Keyword(null,"F","F",-1115543258),/oidal$/,new cljs.core.Keyword(null,"A","A",-1688942394),/oides$/,new cljs.core.Keyword(null,"A","A",-1688942394),/otide$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ously$/,new cljs.core.Keyword(null,"A","A",-1688942394),/able$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ably$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ages$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ally$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ance$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ancy$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ants$/,new cljs.core.Keyword(null,"B","B",-1422503380),/aric$/,new cljs.core.Keyword(null,"A","A",-1688942394),/arly$/,new cljs.core.Keyword(null,"K","K",711741),/ated$/,new cljs.core.Keyword(null,"I","I",1827140963),/ates$/,new cljs.core.Keyword(null,"A","A",-1688942394),/atic$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ator$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ealy$/,new cljs.core.Keyword(null,"Y","Y",-560717356),/edly$/,new cljs.core.Keyword(null,"E","E",230849842),/eful$/,new cljs.core.Keyword(null,"A","A",-1688942394),/eity$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ence$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ency$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ened$/,new cljs.core.Keyword(null,"E","E",230849842),/enly$/,new cljs.core.Keyword(null,"E","E",230849842),/eous$/,new cljs.core.Keyword(null,"A","A",-1688942394),/hood$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ials$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ians$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ible$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ibly$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ical$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ides$/,new cljs.core.Keyword(null,"L","L",-1038307519),/iers$/,new cljs.core.Keyword(null,"A","A",-1688942394),/iful$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ines$/,new cljs.core.Keyword(null,"M","M",-1755742206),/ings$/,new cljs.core.Keyword(null,"N","N",-640629860),/ions$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ious$/,new cljs.core.Keyword(null,"A","A",-1688942394),/isms$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ists$/,new cljs.core.Keyword(null,"A","A",-1688942394),/itic$/,new cljs.core.Keyword(null,"H","H",-938148327),/ized$/,new cljs.core.Keyword(null,"F","F",-1115543258),/izer$/,new cljs.core.Keyword(null,"F","F",-1115543258),/less$/,new cljs.core.Keyword(null,"A","A",-1688942394),/lily$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ness$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ogen$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ward$/,new cljs.core.Keyword(null,"A","A",-1688942394),/wise$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ying$/,new cljs.core.Keyword(null,"B","B",-1422503380),/yish$/,new cljs.core.Keyword(null,"A","A",-1688942394),/acy$/,new cljs.core.Keyword(null,"A","A",-1688942394),/age$/,new cljs.core.Keyword(null,"B","B",-1422503380),/aic$/,new cljs.core.Keyword(null,"A","A",-1688942394),/als$/,new cljs.core.Keyword(null,"BB","BB",1873237105),/ant$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ars$/,new cljs.core.Keyword(null,"O","O",795252742),/ary$/,new cljs.core.Keyword(null,"F","F",-1115543258),/ata$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ate$/,new cljs.core.Keyword(null,"A","A",-1688942394),/eal$/,new cljs.core.Keyword(null,"Y","Y",-560717356),/ear$/,new cljs.core.Keyword(null,"Y","Y",-560717356),/ely$/,new cljs.core.Keyword(null,"E","E",230849842),/ene$/,new cljs.core.Keyword(null,"E","E",230849842),/ent$/,new cljs.core.Keyword(null,"C","C",-173629587),/ery$/,new cljs.core.Keyword(null,"E","E",230849842),/ese$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ful$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ial$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ian$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ics$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ide$/,new cljs.core.Keyword(null,"L","L",-1038307519),/ied$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ier$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ies$/,new cljs.core.Keyword(null,"P","P",1668913291),/ily$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ine$/,new cljs.core.Keyword(null,"M","M",-1755742206),/ing$/,new cljs.core.Keyword(null,"N","N",-640629860),/ion$/,new cljs.core.Keyword(null,"Q","Q",663320520),/ish$/,new cljs.core.Keyword(null,"C","C",-173629587),/ism$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ist$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ite$/,new cljs.core.Keyword(null,"AA","AA",2016584549),/ity$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ium$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ive$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ize$/,new cljs.core.Keyword(null,"F","F",-1115543258),/oid$/,new cljs.core.Keyword(null,"A","A",-1688942394),/one$/,new cljs.core.Keyword(null,"R","R",-936662523),/ous$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ae$/,new cljs.core.Keyword(null,"A","A",-1688942394),/al$/,new cljs.core.Keyword(null,"BB","BB",1873237105),/ar$/,new cljs.core.Keyword(null,"X","X",1705996313),/as$/,new cljs.core.Keyword(null,"B","B",-1422503380),/ed$/,new cljs.core.Keyword(null,"E","E",230849842),/en$/,new cljs.core.Keyword(null,"F","F",-1115543258),/es$/,new cljs.core.Keyword(null,"E","E",230849842),/ia$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ic$/,new cljs.core.Keyword(null,"A","A",-1688942394),/is$/,new cljs.core.Keyword(null,"A","A",-1688942394),/ly$/,new cljs.core.Keyword(null,"B","B",-1422503380),/on$/,new cljs.core.Keyword(null,"S","S",1267293308),/or$/,new cljs.core.Keyword(null,"T","T",175240877),/um$/,new cljs.core.Keyword(null,"U","U",1362002044),/us$/,new cljs.core.Keyword(null,"V","V",-1169284006),/yl$/,new cljs.core.Keyword(null,"R","R",-936662523),/s'/,new cljs.core.Keyword(null,"A","A",-1688942394),/'s$/,new cljs.core.Keyword(null,"A","A",-1688942394),/a$/,new cljs.core.Keyword(null,"A","A",-1688942394),/e$/,new cljs.core.Keyword(null,"A","A",-1688942394),/i$/,new cljs.core.Keyword(null,"A","A",-1688942394),/o$/,new cljs.core.Keyword(null,"A","A",-1688942394),/s$/,new cljs.core.Keyword(null,"W","W",-2035370425),/y$/,new cljs.core.Keyword(null,"B","B",-1422503380));
clj_fuzzy.lovins.conditions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"M","M",-1755742206),new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"CC","CC",-1077285628),new cljs.core.Keyword(null,"R","R",-936662523),new cljs.core.Keyword(null,"AA","AA",2016584549),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"W","W",-2035370425),new cljs.core.Keyword(null,"Q","Q",663320520),new cljs.core.Keyword(null,"P","P",1668913291),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"J","J",1394734828),new cljs.core.Keyword(null,"Z","Z",459124588),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"BB","BB",1873237105),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"Y","Y",-560717356),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"U","U",1362002044),new cljs.core.Keyword(null,"S","S",1267293308),new cljs.core.Keyword(null,"N","N",-640629860),new cljs.core.Keyword(null,"K","K",711741)],[(function (stem){
return cljs.core.not.call(null,clj_fuzzy.helpers.re_test_QMARK_.call(null,/(u|x|([^o]s))$/,stem));
}),(function (stem){
return cljs.core.not.call(null,clj_fuzzy.helpers.re_test_QMARK_.call(null,/[acem]$/,stem));
}),(function (stem){
return cljs.core.not.call(null,clj_fuzzy.helpers.re_test_QMARK_.call(null,/[oe]$/,stem));
}),(function (stem){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/l$/,stem);
}),(function (stem){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/[nr]$/,stem);
}),(function (stem){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/([dflt]|ph|th|er|or|es)$/,stem);
}),(function (stem){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/[li]$/,stem);
}),(function (stem){
return true;
}),(function (stem){
var and__24748__auto__ = clj_fuzzy.lovins.conditions.call(null,new cljs.core.Keyword(null,"B","B",-1422503380)).call(null,stem);
if(cljs.core.truth_(and__24748__auto__)){
return clj_fuzzy.lovins.conditions.call(null,new cljs.core.Keyword(null,"E","E",230849842),stem);
} else {
return and__24748__auto__;
}
}),(function (stem){
return cljs.core.not.call(null,clj_fuzzy.helpers.re_test_QMARK_.call(null,/[su]$/,stem));
}),(function (stem){
var and__24748__auto__ = clj_fuzzy.lovins.conditions.call(null,new cljs.core.Keyword(null,"B","B",-1422503380)).call(null,stem);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,clj_fuzzy.helpers.re_test_QMARK_.call(null,/[ln]$/,stem));
} else {
return and__24748__auto__;
}
}),(function (stem){
return cljs.core.not.call(null,clj_fuzzy.helpers.re_test_QMARK_.call(null,/c$/,stem));
}),(function (stem){
return (cljs.core.count.call(null,stem) > (4));
}),(function (stem){
return (cljs.core.count.call(null,stem) > (2));
}),(function (stem){
return cljs.core.not.call(null,clj_fuzzy.helpers.re_test_QMARK_.call(null,/[ae]$/,stem));
}),(function (stem){
return cljs.core.not.call(null,clj_fuzzy.helpers.re_test_QMARK_.call(null,/f$/,stem));
}),(function (stem){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/(s|[^o]t)$/,stem);
}),(function (stem){
return (cljs.core.count.call(null,stem) > (3));
}),(function (stem){
var and__24748__auto__ = clj_fuzzy.lovins.conditions.call(null,new cljs.core.Keyword(null,"B","B",-1422503380)).call(null,stem);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,clj_fuzzy.helpers.re_test_QMARK_.call(null,/(met|ryst)/,stem));
} else {
return and__24748__auto__;
}
}),(function (stem){
return cljs.core.not.call(null,clj_fuzzy.helpers.re_test_QMARK_.call(null,/e$/,stem));
}),(function (stem){
var and__24748__auto__ = clj_fuzzy.lovins.conditions.call(null,new cljs.core.Keyword(null,"B","B",-1422503380)).call(null,stem);
if(cljs.core.truth_(and__24748__auto__)){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/f$/,stem);
} else {
return and__24748__auto__;
}
}),(function (stem){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/in$/,stem);
}),(function (stem){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/(l|i|u\we)$/,stem);
}),(function (stem){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/(t|ll)$/,stem);
}),(function (stem){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/c$/,stem);
}),(function (stem){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/[lmnr]$/,stem);
}),(function (stem){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/(dr|[^t]t)$/,stem);
}),(function (stem){
if(cljs.core.truth_(clj_fuzzy.helpers.re_test_QMARK_.call(null,/s\w{2}$/,stem))){
return clj_fuzzy.lovins.conditions.call(null,new cljs.core.Keyword(null,"C","C",-173629587)).call(null,stem);
} else {
return clj_fuzzy.lovins.conditions.call(null,new cljs.core.Keyword(null,"B","B",-1422503380)).call(null,stem);
}
}),(function (stem){
var and__24748__auto__ = clj_fuzzy.lovins.conditions.call(null,new cljs.core.Keyword(null,"B","B",-1422503380)).call(null,stem);
if(cljs.core.truth_(and__24748__auto__)){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/(l|i|(u\we))$/,stem);
} else {
return and__24748__auto__;
}
})]);
/**
 * Drop double occurences of certain letters in the given [stem].
 */
clj_fuzzy.lovins.dedouble = (function clj_fuzzy$lovins$dedouble(stem){
return clojure.string.replace.call(null,stem,/([bdglmnprst])\1{1,}$/,"$1");
});
clj_fuzzy.lovins.transformations = cljs.core.list(/iev$/,"ief",/uct$/,"uc",/umpt$/,"um",/rpt$/,"rb",/urs$/,"ur",/istr$/,"ister",/metr$/,"meter",/olv$/,"olut",/([^aoi])ul$/,"$1l",/bex$/,"bic",/dex$/,"dic",/pex$/,"pic",/tex$/,"tic",/ax$/,"ac",/ex$/,"ec",/ix$/,"ic",/lux$/,"luc",/uad$/,"uas",/vad$/,"vas",/cid$/,"cis",/lid$/,"lis",/erid$/,"eris",/pand$/,"pans",/([^s])end$/,"$1ens",/ond$/,"ons",/lud$/,"lus",/rud$/,"rus",/([^pt])her$/,"$1hes",/mit$/,"mis",/([^m])ent$/,"$1ens",/ert$/,"ers",/([^n])et$/,"$1es",/(yt|yz)$/,"ys");
/**
 * Clean a [word] of characters unsupported by the stemmer
 */
clj_fuzzy.lovins.clean = (function clj_fuzzy$lovins$clean(word){
return clojure.string.replace.call(null,word,/[^a-zA-Z']/,"");
});
/**
 * Prepare a [word] for its passage through the stemmer.
 */
clj_fuzzy.lovins.prep_word = (function clj_fuzzy$lovins$prep_word(word){
return clj_fuzzy.lovins.clean.call(null,clojure.string.lower_case.call(null,word));
});
clj_fuzzy.lovins.test_suffix_fn = (function clj_fuzzy$lovins$test_suffix_fn(word){
return (function (ending){
var match = cljs.core.first.call(null,ending);
var condition = cljs.core.second.call(null,ending);
var stem = clojure.string.replace.call(null,word,match,"");
if(cljs.core.truth_((function (){var and__24748__auto__ = (cljs.core.count.call(null,stem) < cljs.core.count.call(null,word));
if(and__24748__auto__){
var and__24748__auto____$1 = (cljs.core.count.call(null,stem) > (1));
if(and__24748__auto____$1){
return clj_fuzzy.lovins.conditions.call(null,condition).call(null,stem);
} else {
return and__24748__auto____$1;
}
} else {
return and__24748__auto__;
}
})())){
return stem;
} else {
return null;
}
});
});
/**
 * Drop the longest suffix we can find in the given [word].
 */
clj_fuzzy.lovins.drop_suffix = (function clj_fuzzy$lovins$drop_suffix(word){
var temp__4655__auto__ = cljs.core.some.call(null,clj_fuzzy.lovins.test_suffix_fn.call(null,word),cljs.core.partition.call(null,(2),clj_fuzzy.lovins.endings));
if(cljs.core.truth_(temp__4655__auto__)){
var stem = temp__4655__auto__;
return stem;
} else {
return word;
}
});
/**
 * Apply the algorithm's transformations to the given [stem].
 */
clj_fuzzy.lovins.apply_transformations = (function clj_fuzzy$lovins$apply_transformations(stem){
var temp__4655__auto__ = cljs.core.some.call(null,(function (p1__30819_SHARP_){
if(cljs.core.truth_(clj_fuzzy.helpers.re_test_QMARK_.call(null,cljs.core.first.call(null,p1__30819_SHARP_),stem))){
return p1__30819_SHARP_;
} else {
return null;
}
}),cljs.core.partition.call(null,(2),clj_fuzzy.lovins.transformations));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__30823 = temp__4655__auto__;
var match = cljs.core.nth.call(null,vec__30823,(0),null);
var replacement = cljs.core.nth.call(null,vec__30823,(1),null);
return clojure.string.replace.call(null,stem,match,replacement);
} else {
return stem;
}
});
/**
 * Stem the given [word] according to the algorithm.
 */
clj_fuzzy.lovins.stem = (function clj_fuzzy$lovins$stem(word){
return clj_fuzzy.lovins.apply_transformations.call(null,clj_fuzzy.lovins.dedouble.call(null,clj_fuzzy.lovins.drop_suffix.call(null,clj_fuzzy.lovins.prep_word.call(null,word))));
});

//# sourceMappingURL=lovins.js.map?rel=1478134422012