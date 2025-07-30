<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ProfileChangedEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $oldEmail;

    public function __construct(User $user, $oldEmail = null)
    {
        $this->user = $user;
        $this->oldEmail = $oldEmail;
    }

    public function build()
    {
        return $this->subject('Perubahan Data Profil - Website Desa Karanganyar')
                    ->view('emails.profile-changed')
                    ->with([
                        'userName' => $this->user->name,
                        'oldEmail' => $this->oldEmail,
                        'newEmail' => $this->user->email,
                    ]);
    }
}