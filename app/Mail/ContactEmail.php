<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactEmail extends Mailable
{
    use Queueable, SerializesModels;

    protected $data;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
          $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('groupe2@asr.lan')
          ->view('emails.contact')
          ->with([
                  'lastName' => $this->data->lastName,
                  'firstName' => $this->data->firstName,
                  'email' => $this->data->email,
                  'phone' => $this->data->phone,
                  'object' => $this->data->object,
                  'type' => $this->data->message,
          ]);
    }
}
