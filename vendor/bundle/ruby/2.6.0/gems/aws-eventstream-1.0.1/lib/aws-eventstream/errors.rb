module Aws
  module EventStream
    module Errors

      # Raised when reading bytes exceed buffer total bytes
      class ReadBytesExceedLengthError < RuntimeError
        def initialize(target_byte, total_len)
          msg = "Attempting reading bytes to offset #{target_byte} exceeds"\
            " buffer length of #{total_len}"
          super(msg)
        end
      end

      # Raise when insufficient bytes of a message is received
      class IncompleteMessageError < RuntimeError
        def initialize(*args)
          super("Not enough bytes for event message")
        end
      end

      class PreludeChecksumError < RuntimeError
        def initialize(*args)
          super("Prelude checksum mismatch")
        end
      end

      class MessageChecksumError < RuntimeError
        def initialize(*args)
          super("Message checksum mismatch")
        end
      end

    end
  end
end
