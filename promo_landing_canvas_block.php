<?php

$type = $_POST['type'];

$blockA = array(
    array('src'=>'http://www.mosaic.kentando.com/img/500x250f.jpeg','x'=>0,'y'=>0,'w'=>'500','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125a.jpg','x'=>500,'y'=>0,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125b.jpg','x'=>500,'y'=>125,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125c.jpeg','x'=>0,'y'=>250,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125d.jpeg','x'=>0,'y'=>375,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x250a.jpeg','x'=>250,'y'=>250,'w'=>'250','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x250b.jpg','x'=>500,'y'=>250,'w'=>'250','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x250c.jpeg','x'=>0,'y'=>500,'w'=>'250','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/500x250b.jpg','x'=>250,'y'=>500,'w'=>'500','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656)
);
$blockB = array(
    array('src'=>'http://www.mosaic.kentando.com/img/250x250f.jpeg','x'=>0,'y'=>0,'w'=>'250','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x250e.jpeg','x'=>250,'y'=>0,'w'=>'250','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x250d.jpeg','x'=>500,'y'=>0,'w'=>'250','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/500x250f.jpeg','x'=>0,'y'=>250,'w'=>'500','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125f.jpeg','x'=>500,'y'=>250,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125e.png','x'=>500,'y'=>375,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125d.jpeg','x'=>0,'y'=>500,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125c.jpeg','x'=>0,'y'=>625,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x250c.jpeg','x'=>250,'y'=>500,'w'=>'250','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x250b.jpg','x'=>500,'y'=>500,'w'=>'250','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656)
);

$blockC = array(
    array('src'=>'http://www.mosaic.kentando.com/img/500x250f.jpeg','x'=>0,'y'=>0,'w'=>'500','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125f.jpeg','x'=>500,'y'=>0,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125a.jpg','x'=>500,'y'=>125,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x250f.jpeg','x'=>0,'y'=>250,'w'=>'250','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x250e.jpeg','x'=>250,'y'=>250,'w'=>'250','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x250d.jpeg','x'=>500,'y'=>250,'w'=>'250','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125f.jpeg','x'=>0,'y'=>500,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/250x125e.png','x'=>0,'y'=>625,'w'=>'250','h'=>'125','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656),
    array('src'=>'http://www.mosaic.kentando.com/img/500x250a.jpg','x'=>250,'y'=>500,'w'=>'500','h'=>'250','pname'=>'A very long promotion name maybe out of words?','bname'=>'Scalo Nob Hill','promotion'=>1656)
);
$blocks = array('a1'=>$blockA,'a2'=>$blockA,'a3'=>$blockA,'b1'=>$blockB,'b2'=>$blockB,'b3'=>$blockB,'c1'=>$blockC,'c2'=>$blockC,'c3'=>$blockC);
echo json_encode($blocks);
exit;
?>