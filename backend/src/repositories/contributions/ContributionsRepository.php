<?php

interface ContributionsRepository {
    public function save($date, $count, $level);

    public function getAll();
}