<?php

$path = 'data/db.json';
if (!file_exists($path))
  exit('File not found');

$data = file_get_contents($path);
$json = json_decode($data, true);